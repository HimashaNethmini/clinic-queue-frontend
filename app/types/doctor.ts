export type DoctorStatus =
  | "DUTY"
  | "LEAVE"

export type Specialization =
  | "CONSULTANT_SURGEON"
  | "DERMATOLOGIST"
  | "GENERAL_PHYSICIAN"
  | "PEDIATRICIAN"

export interface CreateDoctorDto {
  name: string
  email: string
  phone: string
  specialization: Specialization
  availableTime: string
  status: DoctorStatus
}