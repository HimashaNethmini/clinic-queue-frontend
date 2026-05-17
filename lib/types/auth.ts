export type RegisterPayload = {
  firstName: string
  lastName: string
  email: string
  phone: string
  clinicName: string
  password: string
}

export type RegisterResponse = {
  message: string
  userId?: string
}