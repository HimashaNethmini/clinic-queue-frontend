import axiosInstance from "@/lib/axios"
import { UserCredentials, UserForm } from "../types/User"

export const login = async (data: UserCredentials) => {
  const response = await axiosInstance.post("/api/auth/login", data)
  return response.data
}

export const createAccount = async (data: UserForm) => {
  const response = await axiosInstance.post("/api/auth/register", data)
  return response.data
}
