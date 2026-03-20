import {
  Activity,
  CalendarDays,
  CreditCard,
  LayoutDashboard,
  Settings,
  Stethoscope,
  Users,
  Bell,
  Search,
  TrendingUp,
  UserCheck,
  Wallet,
  Clock3,
  Ticket,
  UserRound,
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

const sidebarItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Appointments", icon: CalendarDays, active: false },
  { name: "Doctor", icon: Stethoscope, active: false },
  { name: "Payment", icon: CreditCard, active: false },
  { name: "Employee", icon: Users, active: false },
  { name: "Settings", icon: Settings, active: false },
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

const doctorsOnDuty = [
  { name: "Dr. Silva", specialty: "General Physician", patients: 12 },
  { name: "Dr. Peris", specialty: "Pediatrician", patients: 8 },
  { name: "Dr. Fernando", specialty: "Dermatologist", patients: 6 },
]

const todaysQueue = [
  {
    token: 1,
    patient: "VSVSV",
    type: "Walk-in",
    phone: "565656565656565",
    status: "Waiting",
  },
  {
    token: 2,
    patient: "djkkd",
    type: "Walk-in",
    phone: "02566556602022",
    status: "Waiting",
  },
  {
    token: 3,
    patient: "bbbffbfb",
    type: "Appt 13:00",
    phone: "0000000000",
    status: "Waiting",
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
    case "Waiting":
      return "bg-amber-100 text-amber-700 border border-amber-200"
    case "In Progress":
      return "bg-sky-100 text-sky-700 border border-sky-200"
    case "Completed":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200"
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200"
  }
}

const DashboardPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-72 border-r border-white/50 bg-white/75 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="border-b border-slate-200/70 px-6 py-6">
            <div className="flex items-center gap-3">
              <p className="py-0.5 text-xl text-slate-500">Admin Panel</p>
            </div>
          </div>

          <div className="flex-1 px-4 py-6">
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.name}
                    href="#"
                    className={[
                      "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                      item.active
                        ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-200"
                        : "text-slate-600 hover:bg-white hover:text-sky-700 hover:shadow-sm",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </a>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Main */}
        <section className="flex-1">
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
                <div className="relative hidden md:block">
                  <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search dashboard..."
                    className="h-11 w-72 rounded-full border-slate-200 bg-white/80 pl-9 focus-visible:ring-cyan-400"
                  />
                </div>

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

            {/* Mobile nav */}
            <div className="relative mb-6 lg:hidden">
              <Card className="overflow-hidden rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
                <div className="h-2 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500" />
                <CardContent className="p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 font-bold text-white shadow-md">
                      CQ
                    </div>
                    <div>
                      <h1 className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-lg font-bold text-transparent">
                        Clinic Queue
                      </h1>
                      <p className="text-sm text-slate-500">Admin Panel</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {sidebarItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <a
                          key={item.name}
                          href="#"
                          className={[
                            "flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium transition",
                            item.active
                              ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md"
                              : "bg-slate-50 text-slate-600",
                          ].join(" ")}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* KPI cards */}
            <div className="relative mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
                      Total Tokens
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      128
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
                      42
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
                      In Progress
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      0
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
                      0
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
                  <form className="space-y-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="patientName"
                        className="text-sm font-semibold tracking-wide text-slate-600 uppercase"
                      >
                        Patient Name
                      </Label>
                      <Input
                        id="patientName"
                        placeholder="Enter patient full name"
                        className="h-14 rounded-2xl border-slate-200 bg-white/80 px-5 text-base shadow-sm focus-visible:ring-cyan-400"
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
                        id="phoneNumber"
                        placeholder="Enter phone number"
                        className="h-14 rounded-2xl border-slate-200 bg-white/80 px-5 text-base shadow-sm focus-visible:ring-cyan-400"
                      />
                    </div>

                    <Button className="h-14 w-full rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 text-base font-semibold text-white shadow-lg shadow-cyan-200 transition-all hover:scale-[1.01]">
                      Register & Issue Token
                    </Button>
                  </form>
                </CardContent>
              </Card>

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
                    {todaysQueue.length} Patients
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
                        {todaysQueue.map((item, index) => (
                          <tr
                            key={`${item.token}-${item.patient}`}
                            className={
                              index !== todaysQueue.length - 1
                                ? "border-b border-slate-100"
                                : ""
                            }
                          >
                            <td className="px-4 py-4">
                              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 font-bold text-cyan-700">
                                {item.token}
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                              {item.patient}
                            </td>

                            <td className="px-4 py-4">
                              <span
                                className={`inline-flex rounded-xl px-3 py-1 text-xs font-semibold ${
                                  item.type === "Walk-in"
                                    ? "bg-slate-100 text-slate-600"
                                    : "bg-violet-100 text-violet-700"
                                }`}
                              >
                                {item.type}
                              </span>
                            </td>

                            <td className="px-4 py-4 text-sm text-slate-600">
                              {item.phone}
                            </td>

                            <td className="px-4 py-4">
                              <span
                                className={`inline-flex rounded-xl px-3 py-1 text-xs font-semibold ${getQueueStatusClasses(
                                  item.status
                                )}`}
                              >
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </CardContent>
              </Card>
            </div>

            {/* Charts / visual summary */}
            <div className="mb-6 grid gap-6 xl:grid-cols-3">
              <Card className="rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur xl:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Weekly Patient Visits
                  </CardTitle>
                  <CardDescription>
                    Total clinic visits over the last 7 days
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex h-72 items-end gap-4 rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 p-6">
                    {[
                      { day: "Mon", value: 60 },
                      { day: "Tue", value: 85 },
                      { day: "Wed", value: 72 },
                      { day: "Thu", value: 96 },
                      { day: "Fri", value: 110 },
                      { day: "Sat", value: 78 },
                      { day: "Sun", value: 54 },
                    ].map((item) => (
                      <div
                        key={item.day}
                        className="flex flex-1 flex-col items-center justify-end gap-3"
                      >
                        <div className="flex w-full items-end justify-center">
                          <div
                            className="w-full rounded-t-2xl bg-gradient-to-t from-sky-500 to-cyan-400 shadow-md"
                            style={{ height: `${item.value * 1.6}px` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-500">
                          {item.day}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Performance
                  </CardTitle>
                  <CardDescription>
                    Key clinic efficiency metrics
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">
                        Appointment Completion
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        84%
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-200">
                      <div className="h-3 w-[84%] rounded-full bg-gradient-to-r from-sky-500 to-cyan-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">
                        Doctor Availability
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        76%
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-200">
                      <div className="h-3 w-[76%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">
                        Payment Collection
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        91%
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-200">
                      <div className="h-3 w-[91%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 p-5 text-white shadow-lg">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-6 w-6" />
                      <div>
                        <p className="text-sm text-white/80">Growth Rate</p>
                        <p className="text-2xl font-bold">+18.2%</p>
                      </div>
                    </div>
                  </div>
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
                              {doctor.specialty}
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
