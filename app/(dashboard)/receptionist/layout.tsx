"use client"

import { LayoutDashboard, Stethoscope, ListOrdered, LogOut } from "lucide-react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/receptionist",
  },
  {
    name: "Doctor",
    icon: Stethoscope,
    path: "/receptionist/doctor",
  },
  {
    name: "Queue",
    icon: ListOrdered,
    path: "/receptionist/queue",
  },
]

export default function ReceptionistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100">
      {/* Desktop Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-white/50 bg-white/75 backdrop-blur-xl lg:flex lg:flex-col">
        {/* Header */}
        <div className="flex h-20 items-center border-b border-slate-200/70 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 font-bold text-white shadow-md">
              CQ
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-xl font-bold text-transparent">
                Clinic Queue
              </h1>

              <p className="text-sm text-slate-500">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6">
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon

              const active = pathname === item.path

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={[
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                    active
                      ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-200"
                      : "text-slate-600 hover:bg-white hover:text-sky-700 hover:shadow-sm",
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Bottom Card */}
        {/* <div className="border-t border-slate-200/70 px-4 py-4">
          <Card className="border-0 bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg">
            <CardContent className="p-4">
              <p className="text-sm font-semibold">
                Clinic Queue
              </p>

              <p className="mt-1 text-xs text-white/85">
                Manage doctors, schedules, staff,
                appointments, and clinic operations in one
                place.
              </p>
            </CardContent>
          </Card> */}

        {/* Bottom Section */}
        <div className="space-y-4 border-t border-slate-200/70 px-4 py-4">
          <Card className="border-0 bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg">
            <CardContent className="p-4">
              <p className="text-sm font-semibold">Clinic Queue</p>

              <p className="mt-1 text-xs text-white/85">
                Manage doctors, schedules, staff, appointments, and clinic
                operations in one place.
              </p>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            className="w-full justify-start rounded-2xl border-red-200 bg-white text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1">
        {/* Mobile Navigation */}
        <div className="relative p-6 lg:hidden">
          <Card className="overflow-hidden rounded-[24px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
            <div className="h-2 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500" />

            <CardContent className="p-5">
              {/* Brand */}
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

              {/* Mobile Links */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {sidebarItems.map((item) => {
                  const Icon = item.icon

                  const active = pathname === item.path

                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={[
                        "flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium transition",
                        active
                          ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md"
                          : "bg-slate-50 text-slate-600",
                      ].join(" ")}
                    >
                      <Icon className="h-4 w-4" />

                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Page Content */}
        {children}
      </main>
    </div>
  )
}
