import {
  Bell,
  Search,
  Plus,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const doctors = [
  {
    id: "DOC-1001",
    name: "Dr. Nimal Silva",
    specialization: "General Physician",
    schedule: "Mon - Fri",
    time: "9:00 AM - 3:00 PM",
    patients: 18,
    status: "Available",
  },
  {
    id: "DOC-1002",
    name: "Dr. Kavindi Perera",
    specialization: "Pediatrician",
    schedule: "Mon - Sat",
    time: "10:00 AM - 4:00 PM",
    patients: 14,
    status: "Busy",
  },
  {
    id: "DOC-1003",
    name: "Dr. Ashan Fernando",
    specialization: "Dermatologist",
    schedule: "Tue - Sat",
    time: "11:00 AM - 5:00 PM",
    patients: 10,
    status: "Available",
  },
  {
    id: "DOC-1004",
    name: "Dr. Senuja Jayasuriya",
    specialization: "Cardiologist",
    schedule: "Mon - Thu",
    time: "8:30 AM - 2:00 PM",
    patients: 8,
    status: "On Leave",
  },
  {
    id: "DOC-1005",
    name: "Dr. Rashmi Wickrama",
    specialization: "ENT Specialist",
    schedule: "Wed - Sun",
    time: "1:00 PM - 6:00 PM",
    patients: 12,
    status: "Available",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Available":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";

    case "Busy":
      return "bg-amber-100 text-amber-700 border border-amber-200";

    case "On Leave":
      return "bg-rose-100 text-rose-700 border border-rose-200";

    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function DoctorPage() {
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
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <Input
                  placeholder="Search doctors..."
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
          <div className="absolute left-10 top-8 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="absolute right-10 top-24 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />

          {/* Stats */}
          <div className="relative mb-6 grid gap-4 md:grid-cols-3">
            <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-slate-500">
                  Total Doctors
                </p>

                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                  24
                </h3>
              </CardContent>
            </Card>

            <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-slate-500">
                  Available Today
                </p>

                <h3 className="mt-2 text-3xl font-bold text-emerald-600">
                  18
                </h3>
              </CardContent>
            </Card>

            <Card className="rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-slate-500">
                  On Leave
                </p>

                <h3 className="mt-2 text-3xl font-bold text-rose-600">
                  3
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

              <Button className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:scale-105 hover:shadow-sky-300">
                <Plus className="mr-2 h-4 w-4" />
                Add Doctor
              </Button>
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
                        Schedule
                      </th>

                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                        Time
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
                          {doctor.schedule}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-600">
                          {doctor.time}
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
                            {doctor.status}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-sm">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-sky-50"
                          >
                            <MoreHorizontal className="h-5 w-5 text-slate-600" />
                          </Button>
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
  );
}