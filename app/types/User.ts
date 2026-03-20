type UserCredentials = {
  username: string
  password: string
}

type UserForm = {
  firstName: string
  lastName: string
  email: string
  username: string
  phone: string
  clinicName: string
  password: string
  confirmPassword: string
}

type UserCredentialsError = {
  error?: string
  message?: string
  status?: number
}

export type UserFormErrors = Partial<Record<keyof UserForm, string>> & {
  message?: string
}

export type { UserCredentials, UserCredentialsError, UserForm }
