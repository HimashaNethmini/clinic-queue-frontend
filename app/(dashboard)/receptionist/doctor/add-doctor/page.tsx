"use client"

import { useState } from "react"
import { Bell,Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TopbarDate from "@/components/topbar-date"
import { createDoctor } from "../../../../services/doctorService"
import { CreateDoctorDto } from "@/app/types/doctor"
import { useRouter } from "next/navigation"


export default function AddDoctorPage() {
  const router = useRouter()

  const [formData, setFormData] = useState<CreateDoctorDto>({
    name: "",
    email: "",
    phone: "",  
    specialization: "GENERAL_PHYSICIAN",
    availableTime: "",
    status: "DUTY",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    try {
      setLoading(true)
      await createDoctor(formData)
      router.push("/receptionist/doctor")

      setFormData({
        name: "",
        email: "",
        phone: "",
        specialization: "GENERAL_PHYSICIAN",
        availableTime: "",
        status: "DUTY",
      })
    } catch (error) {
      console.error("Error adding doctor:", error)
      alert("Failed to add doctor.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">
      <section className="min-h-screen">
        <header className="sticky top-0 z-20 border-b border-white/40 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex h-20 items-center justify-between px-6 lg:px-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Add Doctor
              </h2>
              <p className="text-sm text-slate-500">
                Create a new doctor profile
              </p>
            </div>

            <div className="flex items-center gap-3">
              <TopbarDate />

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/80 shadow-sm hover:bg-sky-50"
              >
                <Bell className="h-5 w-5 text-slate-600" />
              </Button>
            </div>
          </div>
        </header>

        <div className="relative px-6 py-8 lg:px-10">
          <div className="absolute top-8 left-10 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute top-24 right-10 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />

          <Card className="relative max-w-4xl overflow-hidden rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500" />

            <CardHeader className="pt-8">
              <CardTitle className="text-2xl font-bold text-slate-900">
                Doctor Details
              </CardTitle>
              <CardDescription>
                Fill in the doctor information below
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form 
              onSubmit={handleSubmit}
              className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="doctorName">Doctor Name</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter doctor name"
                    className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3"
                  >
                    <option value="CONSULTANT_SURGEON">
                      Consultant Surgeon
                    </option>

                    <option value="DERMATOLOGIST">
                      Dermatologist
                    </option>

                    <option value="GENERAL_PHYSICIAN">
                      General Physician
                    </option>

                    <option value="PEDIATRICIAN">
                      Pediatrician
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="doctorEmail">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="doctor@clinic.com"
                    className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="doctorPhone">Phone Number</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="077 123 4567"
                    className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availableTime">Available Time</Label>
                  <Input
                    name="availableTime"
                    value={formData.availableTime}
                    onChange={handleChange}
                    placeholder="9:00 AM - 3:00 PM"
                    className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="doctorStatus">Status</Label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3"
                  >
                    <option value="DUTY">Duty</option>
                    <option value="LEAVE">Leave</option>
                  </select>
                </div>

                <div className="flex gap-80 md:col-span-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 rounded-full border-slate-200 bg-white px-8 text-lg font-semibold hover:bg-sky-50 hover:text-sky-700"
                  >
                    Cancel
                  </Button>

                  <Button 
                    type="submit"
                    disabled={loading}
                    className="h-12 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 text-lg font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:scale-105">
                    <Plus className="mr-2 h-5 w-5" />
                    {loading ? "Adding..." : "Add Doctor"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
