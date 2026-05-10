"use client"

import {
  Activity,
  Users,
  Bell,
  UserCheck,
  Clock3,
  Ticket,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCallback, useEffect, useState } from "react"
import api from "@/lib/api"
import Link from "next/link"
import TopbarDate from "@/components/topbar-date"
import {
  createAppointment,
  getTodayQueue,
  updateAppointmentStatus,
} from "@/app/services/appointment"
import { getAllDoctors } from "@/app/services/doctorService"
import { Doctor } from "@/app/types/doctor"

interface QueueEntry {
  id: string
  tokenNumber: number
  patientName: string
  phone: string
  status: "WAITING" | "NOW_SERVING" | "COMPLETED" | "CANCELLED"
  // visitType: "WALK_IN" | "APPOINTMENT"
  specialization: string
  appointmentDate: string
}

interface RegistrationResult {
  tokenNumber: number
  patientName: string
  phone: string
}

const SPECIALIZATIONS = [
  "CONSULTANT_SURGEON",
  "DERMATOLOGIST",
  "GENERAL_PHYSICIAN",
  "PEDIATRICIAN",
]

const recentAppointments = [
  {
    id: "APT-1001",
    patient: "Nimal Perera",
    doctor: "Dr. Silva",
    time: "09:30 AM",
    status: "Confirmed",
  },
  {
    id: "APT-1002",
    patient: "Kavindi Fernando",
    doctor: "Dr. Peris",
    time: "10:00 AM",
    status: "Pending",
  },
  {
    id: "APT-1003",
    patient: "Ashan Wickrama",
    doctor: "Dr. Fernando",
    time: "10:30 AM",
    status: "Completed",
  },
]


function getStatusClasses(status: string) {
  switch (status) {
    case "Confirmed":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200"
    case "Pending":
      return "bg-amber-100 text-amber-700 border border-amber-200"
    case "Completed":
      return "bg-sky-100 text-sky-700 border border-sky-200"
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200"
  }
}

function getQueueStatusClasses(status: string) {
  switch (status) {
    case "WAITING":
      return "bg-amber-100 text-amber-700 border border-amber-200"
    case "NOW_SERVING":
      return "bg-sky-100 text-sky-700 border border-sky-200"
    case "COMPLETED":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200"
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200"
  }
}

const DashboardPage = () => {
  const [doctorsOnDuty, setDoctorsOnDuty] = useState<Doctor[]>([])
  const [queue, setQueue] = useState<QueueEntry[]>([])
  const [stats, setStats] = useState({
    total: 0,
    waiting: 0,
    nowServing: 0,
    completed: 0,
  })

  const [patientName, setPatientName] = useState("")
  const [phone, setPhone] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<RegistrationResult | null>(null)
  const [error, setError] = useState("")

  const fetchDoctors = async () => {
  try {
    const data = await getAllDoctors()
    const dutyDoctors = data.filter((doc: Doctor) => doc.status === "DUTY")
    setDoctorsOnDuty(dutyDoctors)
  } catch (err) {
    console.error("Failed to fetch doctors:", err)
  }
}

  const fetchQueue = useCallback(async () => {
    try {
      const entries: QueueEntry[] = await getTodayQueue()

      setQueue(entries)

      setStats({
        total: entries.length,
        waiting: entries.filter((e) => e.status === "WAITING").length,
        nowServing: entries.filter((e) => e.status === "NOW_SERVING").length,
        completed: entries.filter((e) => e.status === "COMPLETED").length,
      })
    } catch (err) {
      console.error("Failed to fetch queue:", err)
    }
  }, [])

  useEffect(() => {
    fetchQueue()
    fetchDoctors()

    const interval = setInterval(fetchQueue, 10000)
    return () => clearInterval(interval)
  }, [fetchQueue])

  const handleStatusChange = async (id: string, currentStatus: string) => {
    let nextStatus = "WAITING"

    if (currentStatus === "WAITING") {
      nextStatus = "NOW_SERVING"
    } else if (currentStatus === "NOW_SERVING") {
      nextStatus = "COMPLETED"
    } else if (currentStatus === "COMPLETED") {
      nextStatus = "WAITING"
    }

    try {
      await updateAppointmentStatus(id, nextStatus)
      fetchQueue()
    } catch (err) {
      console.error("Failed to update status", err)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!patientName || !phone || !specialization) {
      setError("All fields are required")
      return
    }

    setSubmitting(true)
    setError("")
    setSuccess(null)

    try {
      const res = await createAppointment({
        patientName: patientName.trim(),
        phone: phone.trim(),
        specialization,
      })

      setSuccess({
        tokenNumber: res.tokenNumber,
        patientName: res.patientName,
        phone: res.phone,
      })

      setPatientName("")
      setPhone("")
      setSpecialization("")
      fetchQueue()
    } catch (err: any) {
      setError(err?.response?.data?.message || "Registration failed")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">
      <div className="flex min-h-screen">
        {/* Main */}
        <section className="min-w-0 flex-1">
          {/* Topbar */}
          <header className="sticky top-0 z-20 border-b border-white/40 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-20 items-center justify-between px-6 lg:px-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Analytics Dashboard
                </h2>
                <p className="text-sm text-slate-500">
                  Overview of clinic operations and performance
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

            {/* KPI cards */}
            <div className="relative mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
                      Total Tokens
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      {stats.total}
                    </h3>
                    <p className="mt-1 text-xs text-emerald-600">
                      Issued today
                    </p>
                  </div>
                  <div className="rounded-2xl bg-sky-100 p-3">
                    <Ticket className="h-6 w-6 text-sky-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
                      Waiting
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      {stats.waiting}
                    </h3>
                    <p className="mt-1 text-xs text-amber-600">In the queue</p>
                  </div>
                  <div className="rounded-2xl bg-amber-100 p-3">
                    <Clock3 className="h-6 w-6 text-amber-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
                      Now Serving
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      {stats.nowServing}
                    </h3>
                    <p className="mt-1 text-xs text-emerald-600">
                      Being seen now
                    </p>
                  </div>
                  <div className="rounded-2xl bg-sky-100 p-3">
                    <Users className="h-6 w-6 text-sky-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
                      Completed
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      {stats.completed}
                    </h3>
                    <p className="mt-1 text-xs text-amber-600">Visits done</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-100 p-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"></div>

            {/* Walk-in Register + Today's Queue */}
            <div className="mb-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
              <Card className="rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    Register Walk-in Patient
                  </CardTitle>
                  <CardDescription>
                    Add a patient and issue a token instantly
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form className="space-y-5" onSubmit={handleRegister}>
                    <div className="space-y-2">
                      <Label
                        htmlFor="patientName"
                        className="text-sm font-semibold tracking-wide text-slate-600 uppercase"
                      >
                        Patient Name
                      </Label>
                      <Input
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Enter patient full name"
                        className="h-14 rounded-2xl border-slate-200 bg-white/80 px-5 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phoneNumber"
                        className="text-sm font-semibold tracking-wide text-slate-600 uppercase"
                      >
                        Phone Number
                      </Label>
                      <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                        className="h-14 rounded-2xl border-slate-200 bg-white/80 px-5 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400"
                      />
                    </div>

                    {/*SPECIALIZATION DROPDOWN */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="specialization"
                        className="text-sm font-semibold tracking-wide text-slate-600 uppercase"
                      >
                        Specialization
                      </Label>
                      <select
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        className="h-14 rounded-2xl border-slate-200 bg-white/80 px-5 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <option value="">Select specialization</option>
                        {SPECIALIZATIONS.map((sp) => (
                          <option key={sp} value={sp}>
                            {sp.replaceAll("_", " ")}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="h-14 w-full rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 text-base font-semibold text-white shadow-lg shadow-cyan-200 transition-all hover:scale-[1.01]"
                    >
                      {submitting ? "Registering..." : "Register & Issue Token"}
                    </Button>
                  </form>

                  {error && (
                    <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  {success && (
                    <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                      Token #{success.tokenNumber} issued for{" "}
                      {success.patientName}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* queue table */}
              <Card className="rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      Today&apos;s Queue
                    </CardTitle>
                    <CardDescription>
                      Live queue overview for today
                    </CardDescription>
                  </div>

                  <div className="rounded-xl bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                    {stats.total} Patients
                  </div>
                </CardHeader>

                <CardContent>
                  <table className="w-full min-w-[620px] border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200/80">
                        <th className="px-4 py-4 text-left text-sm font-semibold tracking-wide text-slate-500 uppercase">
                          Token
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold tracking-wide text-slate-500 uppercase">
                          Patient
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold tracking-wide text-slate-500 uppercase">
                          Type
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold tracking-wide text-slate-500 uppercase">
                          Phone
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold tracking-wide text-slate-500 uppercase">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {queue.length === 0 ? (
                        <tr>
                          <td
                            colSpan={5}
                            className="px-4 py-8 text-center text-sm text-slate-400"
                          >
                            No patients in the queue yet
                          </td>
                        </tr>
                      ) : (
                        queue.map((item, index) => (
                          <tr
                            key={item.id}
                            className={
                              index !== queue.length - 1
                                ? "border-b border-slate-100"
                                : ""
                            }
                          >
                            <td className="px-4 py-4">
                              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 font-bold text-cyan-700">
                                {item.tokenNumber}
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                              {item.patientName}
                            </td>

                            <td className="px-4 py-4">
                              <span className="inline-flex rounded-xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                                Walk-in
                              </span>
                            </td>

                            <td className="px-4 py-4 text-sm text-slate-600">
                              {item.phone}
                            </td>

                            <td className="px-4 py-4">
                              <button
                                onClick={() =>
                                  handleStatusChange(item.id, item.status)
                                }
                                className={`inline-flex rounded-xl px-3 py-1 text-xs font-semibold transition hover:scale-105 ${getQueueStatusClasses(
                                  item.status
                                )}`}
                              >
                                {item.status.replace("_", " ")}
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>

            {/* Bottom section */}
            <div className="grid gap-6 xl:grid-cols-2">
              <Card className="rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Recent Appointments
                  </CardTitle>
                  <CardDescription>
                    Latest activity from today’s queue
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {recentAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-4"
                      >
                        <div>
                          <p className="font-semibold text-slate-800">
                            {appointment.patient}
                          </p>
                          <p className="text-sm text-slate-500">
                            {appointment.doctor} • {appointment.time}
                          </p>
                        </div>

                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            appointment.status
                          )}`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Doctors On Duty
                  </CardTitle>
                  <CardDescription>
                    Today’s active doctors and patient load
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {doctorsOnDuty.map((doctor) => (
                      <div
                        key={doctor.name}
                        className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-md">
                            <UserCheck className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">
                              {doctor.name}
                            </p>
                            <p className="text-sm text-slate-500">
                              {doctor.specialization}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-semibold text-slate-800">
                            {doctor.patients} Patients
                          </p>
                          <p className="text-xs text-emerald-600">
                            Active today
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary strip */}
            <Card className="mt-6 rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
              <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-100 p-3">
                    <Activity className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Clinic Status</p>
                    <p className="text-lg font-bold text-slate-900">
                      Operating Normally
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 text-white shadow-lg shadow-sky-200 hover:scale-105">
                    View Reports
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-slate-200 bg-white hover:bg-sky-50 hover:text-sky-700"
                  >
                    Export Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}

export default DashboardPage
