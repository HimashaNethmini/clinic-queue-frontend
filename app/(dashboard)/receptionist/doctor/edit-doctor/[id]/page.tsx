"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Bell, Save } from "lucide-react"

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

import {
  getDoctorById,
  updateDoctor,
} from "@/app/services/doctorService"

import { CreateDoctorDto } from "@/app/types/doctor"

export default function EditDoctorPage() {
  const params = useParams()
  const router = useRouter()

  const doctorId = params.id as string

  const [loading, setLoading] =
    useState(false)

  const [fetching, setFetching] =
    useState(true)

  const [formData, setFormData] =
    useState<CreateDoctorDto>({
      name: "",
      email: "",
      phone: "",
      specialization:
        "GENERAL_PHYSICIAN",
      availableTime: "",
      status: "DUTY",
    })

  useEffect(() => {
    fetchDoctor()
  }, [])

  const fetchDoctor = async () => {
    try {
      const doctor =
        await getDoctorById(doctorId)

      setFormData({
        name: doctor.name,
        email: doctor.email,
        phone: doctor.phone,
        specialization:
          doctor.specialization,
        availableTime:
          doctor.availableTime,
        status: doctor.status,
      })
    } catch (error) {
      console.error(
        "Error fetching doctor:",
        error
      )
    } finally {
      setFetching(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
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

      await updateDoctor(
        doctorId,
        formData
      )

      router.push(
        "/receptionist/doctor"
      )
    } catch (error) {
      console.error(
        "Error updating doctor:",
        error
      )

      alert("Failed to update doctor")
    } finally {
      setLoading(false)
    }
  }

  if (fetching) {
    return (
      <div className="p-10">
        Loading doctor...
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">
      <section className="min-h-screen">
        <header className="sticky top-0 z-20 border-b border-white/40 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex h-20 items-center justify-between px-6 lg:px-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Edit Doctor
              </h2>

              <p className="text-sm text-slate-500">
                Update doctor details
              </p>
            </div>

            <TopbarDate />
          </div>
        </header>

        <div className="px-6 py-8 lg:px-10">
          <Card className="max-w-4xl rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100">
            <CardHeader>
              <CardTitle>
                Doctor Details
              </CardTitle>

              <CardDescription>
                Edit doctor information
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="grid gap-6 md:grid-cols-2"
              >
                {/* NAME */}
                <div className="space-y-2">
                  <Label>
                    Doctor Name
                  </Label>

                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* SPECIALIZATION */}
                <div className="space-y-2">
                  <Label>
                    Specialization
                  </Label>

                  <select
                    name="specialization"
                    value={
                      formData.specialization
                    }
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

                {/* EMAIL */}
                <div className="space-y-2">
                  <Label>Email</Label>

                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* PHONE */}
                <div className="space-y-2">
                  <Label>Phone</Label>

                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* AVAILABLE TIME */}
                <div className="space-y-2">
                  <Label>
                    Available Time
                  </Label>

                  <Input
                    name="availableTime"
                    value={
                      formData.availableTime
                    }
                    onChange={handleChange}
                  />
                </div>

                {/* STATUS */}
                <div className="space-y-2">
                  <Label>Status</Label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3"
                  >
                    <option value="DUTY">
                      Duty
                    </option>

                    <option value="LEAVE">
                      Leave
                    </option>
                  </select>
                </div>

                <div className="md:col-span-2 flex justify-end">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 text-white"
                  >
                    <Save className="mr-2 h-5 w-5" />

                    {loading
                      ? "Saving..."
                      : "Save Changes"}
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