import axios from "axios"

const API_BASE_URL = "https://api.freeapi.app/api/v1/public"

// Define the API response structure based on the actual response
interface ApiResponse<T> {
  statusCode: number
  data: {
    page: number
    limit: number
    totalPages: number
    previousPage: boolean
    nextPage: boolean
    totalItems: number
    currentPageItems: number
    data: T
  }
  message: string
  success: boolean
}

// User interfaces based on the actual API response
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
  street: {
    number: number
    name: string
  }
  coordinates: {
    latitude: string
    longitude: string
  }
  timezone: {
    offset: string
    description: string
  }
}

interface User {
  id: number
  gender: string
  name: UserName
  location: UserLocation
  email: string
  phone: string
  cell?: string
  picture: UserPicture
  nat: string
}

export const getUsers = (page=1, limit=10) => {
  return axios.get<ApiResponse<User[]>>(`${API_BASE_URL}/randomusers`, {
    params: {
      page,
      limit,
    },
  })
}

export const getUserById = (id: number) => {
  return axios.get<ApiResponse<User>>(`${API_BASE_URL}/users/${id}`)
}

export const createUser = (userData: Partial<User>) => {
  return axios.post<ApiResponse<User>>(`${API_BASE_URL}/users`, userData)
}

export const updateUser = (id: number, userData: Partial<User>) => {
  return axios.put<ApiResponse<User>>(`${API_BASE_URL}/users/${id}`, userData)
}

export const deleteUser = (id: number) => {
  return axios.delete<ApiResponse<boolean>>(`${API_BASE_URL}/users/${id}`)
}
