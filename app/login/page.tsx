"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { UserCredentials, UserCredentialsError } from "../types/User"
import { login } from "../services/authService"

const LoginPage = () => {
  const router = useRouter()

  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<UserCredentialsError>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError({})

    try {
      const data = await login(userCredentials)

      console.log(data)

      console.log("Login success:", data)

      if (data.token) {
        localStorage.setItem("token", data.token)
      }

      router.push("/dashboard")
    } catch (err: any) {
      setError(err.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">
      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center overflow-hidden px-6 py-16 lg:px-10">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-52 w-52 rounded-full bg-cyan-300/30 blur-3xl" />

        <Card className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500" />

          <CardContent className="px-8 py-10">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-xl font-bold text-white shadow-md">
                CQ
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Sign in to access your ClinicQ dashboard
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-slate-700">
                  User Name
                </Label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  value={userCredentials.username}
                  onChange={handleChange}
                  placeholder="Enter your User Name"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 text-black focus-visible:ring-cyan-400"
                />
                {error && (
                  <p className="text-sm text-red-500">{error?.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-700">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="text-sm font-medium text-sky-600 transition hover:text-cyan-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={userCredentials.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 text-black focus-visible:ring-cyan-400"
                />
                <p className="text-sm text-red-500">{error?.message}</p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-base font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:scale-[1.01] hover:shadow-sky-300"
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              {"Don't"} have an account?{" "}
              <Link
                href="/create-account"
                className="font-semibold text-sky-600 transition hover:text-cyan-600"
              >
                Create new account
              </Link>
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default LoginPage
