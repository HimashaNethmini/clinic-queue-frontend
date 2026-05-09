import axios from "axios"
import { CreateDoctorDto } from "../types/doctor"

const API_URL = "http://localhost:8000/doctors"

export const createDoctor = async (
  doctorData: CreateDoctorDto
) => {
  const response = await axios.post(API_URL, doctorData)

  return response.data
}

export const getAllDoctors = async () => {
  const response = await axios.get(API_URL)

  return response.data
}

export const getDoctorById = async (
  id: string
) => {
  const response = await axios.get(
    `${API_URL}/${id}`
  )

  return response.data
}

export const deleteDoctor = async (
  id: string
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  )

  return response.data
}