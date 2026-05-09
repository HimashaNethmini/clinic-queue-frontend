"use client"

import { useEffect, useState } from "react"
import { Bell, Plus, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import TopbarDate from "@/components/topbar-date"
import Link from "next/link"
import { getAllDoctors, deleteDoctor } from "@/app/services/doctorService"
import { Doctor } from "@/app/types/doctor"

function getStatusClasses(status: string) {
  switch (status) {
    case "DUTY":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200"

    case "LEAVE":
      return "bg-rose-100 text-rose-700 border border-rose-200"

    default:
      return "bg-slate-100 text-slate-700 border border-slate-200"
  }
}

export default function DoctorPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDoctors()
  }, [])

  const fetchDoctors = async () => {
    try {
      const data = await getAllDoctors()
      setDoctors(data)
    } catch (error) {
      console.error("Error fetching doctors:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteDoctor = async (id: string) => {
    try {
      await deleteDoctor(id)

      setDoctors((prev) => prev.filter((doctor) => doctor.id !== id))

      alert("Doctor deleted successfully")
    } catch (error) {
      console.error("Failed to delete doctor:", error)

      alert("Failed to delete doctor")
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">
      {/* Main content */}
      <section>
        {/* Topbar */}
        <header className="sticky top-0 z-20 border-b border-white/40 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex h-20 items-center justify-between px-6 lg:px-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Doctors
              </h2>

              <p className="text-sm text-slate-500">
                Manage doctors, schedules, and availability
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

          {/* Stats */}
          <div className="relative mb-6 grid gap-4 md:grid-cols-3">
            <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-slate-500">
                  Total Doctors
                </p>

                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                  {doctors.length}
                </h3>
              </CardContent>
            </Card>

            <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-slate-500">
                  Available Today
                </p>

                <h3 className="mt-2 text-3xl font-bold text-emerald-600">
                  {doctors.filter((doctor) => doctor.status === "DUTY").length}
                </h3>
              </CardContent>
            </Card>

            <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-slate-500">On Leave</p>

                <h3 className="mt-2 text-3xl font-bold text-rose-600">
                  {doctors.filter((doctor) => doctor.status === "LEAVE").length}
                </h3>
              </CardContent>
            </Card>
          </div>

          {/* Doctors table */}
          <Card className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500" />

            <CardHeader className="flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Doctor Page
                </CardTitle>

                <CardDescription className="mt-1 text-slate-500">
                  View and manage clinic doctors and their schedules
                </CardDescription>
              </div>

              <Link
                href="/receptionist/doctor/add-doctor"
                className="self-start md:self-auto"
              >
                <Button className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:scale-105 hover:shadow-sky-300">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Doctor
                </Button>
              </Link>
            </CardHeader>

            <CardContent className="pt-2">
              <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
                <table className="w-full min-w-[980px] border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                        Doctor ID
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                        Doctor Name
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                        Specialization
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                        AvailableTime
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                        Patients Today
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                        Status
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {doctors.map((doctor, index) => (
                      <tr
                        key={doctor.id}
                        className={
                          index !== doctors.length - 1
                            ? "border-b border-slate-200/80"
                            : ""
                        }
                      >
                        <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                          {doctor.id}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-700">
                          {doctor.name}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-600">
                          {doctor.specialization}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-600">
                          {doctor.availableTime}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-600">
                          {doctor.patients}
                        </td>

                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                              doctor.status
                            )}`}
                          >
                            {doctor.status === "DUTY" ? "Duty" : "Leave"}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-sm">
                          <div className="flex items-center gap-2">
                            {/* EDIT */}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full hover:bg-sky-50"
                            >
                              <Pencil className="h-4 w-4 text-sky-600" />
                            </Button>

                            {/* DELETE */}
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="rounded-full hover:bg-rose-50"
                                >
                                  <Trash2 className="h-4 w-4 text-rose-600" />
                                </Button>
                              </AlertDialogTrigger>

                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Delete Doctor
                                  </AlertDialogTitle>

                                  <AlertDialogDescription>
                                    Are you sure you want to delete this doctor?
                                    This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>

                                  <AlertDialogAction
                                    onClick={() =>
                                      handleDeleteDoctor(doctor.id)
                                    }
                                    className="bg-rose-600 hover:bg-rose-700"
                                  >
                                    Yes, Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
