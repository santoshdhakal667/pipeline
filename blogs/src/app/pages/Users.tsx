"use client"

import { getUsers } from "@/api/userService"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import { UserList } from "@/components/user-list"
import { Pagination } from "@/components/pagination"

export default function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [itemsPerPage] = useState(10)

  useEffect(() => {
    fetchUsers(currentPage)
  }, [currentPage])

  const fetchUsers = async (page = 1) => {
    setLoading(true)
    setError(null)
    try {
      const response = await getUsers(page, itemsPerPage)
      if (response.data && response.data.data && Array.isArray(response.data.data.data)) {
        setUsers(response.data.data.data)
        setCurrentPage(response.data.data.page)
        setTotalPages(response.data.data.totalPages)
        setTotalItems(response.data.data.totalItems)
      } else {
        console.error("Unexpected API response structure:", response.data)
        setError("Unexpected API response structure")
      }
      
    } catch (err) {
      console.error("Error fetching users:", err)
      setError("Failed to fetch users. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = (page: number) =>{
    setCurrentPage(page)
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User List</h1>
        <Button onClick={ ()=>fetchUsers(currentPage)} disabled={loading}>
          {loading ? "Loading..." : "Refresh Users"}
        </Button>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

      {loading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <UserList users={users} />
      )}
      {!loading && users.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          loading={loading}
        />
      )}
    </main>
  )
}
