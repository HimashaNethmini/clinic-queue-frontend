import axios from "axios"
import { CreateDoctorDto } from "../types/doctor"

const API_URL = "http://localhost:8000/doctors"

export const createDoctor = async (
  doctorData: CreateDoctorDto
) => {
  const response = await axios.post(API_URL, doctorData)

  return response.data
}