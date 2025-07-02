"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin } from "lucide-react"

interface UserName {
  title: string
  first: string
  last: string
}

interface UserPicture {
  large: string
  medium: string
  thumbnail: string
}

interface UserLocation {
  city: string
  country: string
  state: string
}

interface User {
  id: number
  name: UserName
  email: string
  phone: string
  picture: UserPicture
  location: UserLocation
  gender: string
  nat: string
}

interface UserListProps {
  users: User[]
}

export function UserList({ users }: UserListProps) {
  if (!users.length) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No users found</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <Card key={user.id}>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={user.picture.medium || "/placeholder.svg"}
                  alt={`${user.name.first} ${user.name.last}`}
                />
                <AvatarFallback>
                  {user.name.first[0]}
                  {user.name.last[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">
                      {user.name.title} {user.name.first} {user.name.last}
                    </h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <Badge variant="secondary">{user.gender}</Badge>
                </div>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>
                      {user.location.city}, {user.location.country}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
