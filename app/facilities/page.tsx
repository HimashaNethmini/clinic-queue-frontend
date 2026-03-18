"use client"

import {
  Bell,
  Search,
  ShieldCheck,
  BedDouble,
  ScanHeart,
  Microscope,
  HeartPulse,
  Wifi,
  CarFront,
  Sparkles,
  ArrowRight,
  Building2,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const facilities = [
  {
    title: "Emergency Care Unit",
    description:
      "24/7 emergency support with rapid response care and trained medical staff.",
    icon: ShieldCheck,
    badge: "24/7 Available",
    gradient: "from-rose-500 to-orange-500",
    soft: "from-rose-50 to-orange-50",
  },
  {
    title: "Private Patient Rooms",
    description:
      "Clean, comfortable, and well-equipped recovery rooms for a better patient experience.",
    icon: BedDouble,
    badge: "12 Rooms",
    gradient: "from-sky-500 to-cyan-500",
    soft: "from-sky-50 to-cyan-50",
  },
  {
    title: "Diagnostic Imaging",
    description:
      "Modern scanning and imaging support for accurate clinical evaluation and diagnosis.",
    icon: ScanHeart,
    badge: "MRI / X-Ray",
    gradient: "from-violet-500 to-indigo-500",
    soft: "from-violet-50 to-indigo-50",
  },
  {
    title: "Medical Laboratory",
    description:
      "Reliable lab services for blood tests, screenings, and clinical sample analysis.",
    icon: Microscope,
    badge: "Fast Reports",
    gradient: "from-emerald-500 to-teal-500",
    soft: "from-emerald-50 to-teal-50",
  },
  {
    title: "Cardiac Monitoring",
    description:
      "Advanced heart monitoring tools and specialist support for critical patients.",
    icon: HeartPulse,
    badge: "Live Monitoring",
    gradient: "from-pink-500 to-rose-500",
    soft: "from-pink-50 to-rose-50",
  },
  {
    title: "Patient Convenience",
    description:
      "High-speed Wi-Fi, parking access, and smooth reception services for visitors.",
    icon: Wifi,
    badge: "Comfort Access",
    gradient: "from-amber-500 to-yellow-500",
    soft: "from-amber-50 to-yellow-50",
  },
]

const supportFacilities = [
  {
    title: "Dedicated Parking",
    icon: CarFront,
    text: "Convenient patient and staff parking near the clinic entrance.",
  },
  {
    title: "Modern Reception",
    icon: Sparkles,
    text: "A welcoming front desk experience with organized patient assistance.",
  },
  {
    title: "Secure Environment",
    icon: ShieldCheck,
    text: "Safe and monitored clinic spaces for patients, visitors, and staff.",
  },
  {
    title: "Pharmacy Services",
    icon: Microscope,
    text: "On-site pharmacy providing quick access to prescribed medications.",
  },
  {
    title: "Waiting Lounge",
    icon: Users,
    text: "Comfortable seating area with a calm environment for patients and visitors.",
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

const FacilitiesPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">
      {/* Page header */}
      <section className="border-b border-white/40 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Facilities
            </h2>
            {/* <p className="text-sm text-slate-500">
              Explore clinic infrastructure and patient care facilities
            </p> */}
          </motion.div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search facilities..."
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
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="absolute top-8 left-10 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute top-24 right-10 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />

        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative mb-6"
        >
          <Card className="overflow-hidden rounded-[30px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500" />
            <CardContent className="relative grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5 text-sm font-semibold text-cyan-700">
                  <Building2 className="h-4 w-4" />
                  Clinic Infrastructure Overview
                </div>

                <h3 className="max-w-2xl text-3xl leading-tight font-bold text-slate-900 md:text-4xl">
                  Modern facilities designed for{" "}
                  <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                    efficient care
                  </span>{" "}
                  and a better patient experience
                </h3>

                <p className="mt-4 max-w-2xl text-slate-600">
                  Clinic Queue helps manage the clinical environment with a
                  polished overview of available facilities, patient comfort
                  features, and operational spaces.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 text-white shadow-lg shadow-sky-200 hover:scale-105">
                    View All Facilities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-slate-200 bg-white hover:bg-sky-50 hover:text-sky-700"
                  >
                    Manage Spaces
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 p-5 text-white shadow-lg">
                  <p className="text-sm text-white/80">Total Facilities</p>
                  <p className="mt-2 text-3xl font-bold">18</p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 p-5 text-white shadow-lg">
                  <p className="text-sm text-white/80">Active Rooms</p>
                  <p className="mt-2 text-3xl font-bold">12</p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-500 p-5 text-white shadow-lg">
                  <p className="text-sm text-white/80">Support Services</p>
                  <p className="mt-2 text-3xl font-bold">09</p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 p-5 text-white shadow-lg">
                  <p className="text-sm text-white/80">Daily Capacity</p>
                  <p className="mt-2 text-3xl font-bold">150+</p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Facility cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {facilities.map((facility) => {
            const Icon = facility.icon

            return (
              <motion.div
                key={facility.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group relative h-full overflow-hidden rounded-[28px] border border-white/60 bg-white/85 shadow-xl shadow-sky-100 backdrop-blur">
                  <div
                    className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${facility.gradient}`}
                  />
                  <CardContent className="p-6">
                    <div
                      className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${facility.soft} p-4`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${facility.gradient} text-white shadow-md`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mb-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                      {facility.badge}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {facility.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {facility.description}
                    </p>

                    <motion.div
                      initial={{ opacity: 0.8 }}
                      whileHover={{ x: 6 }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Lower section */}
        <div className="grid items-stretch gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="h-full"
          >
            <Card className="h-full rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Facility Highlights
                </CardTitle>
                <CardDescription>
                  Core spaces that improve patient care and daily clinic
                  operations
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {supportFacilities.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 + index * 0.08 }}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-md">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="h-full"
          >
            <Card className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
              <div className="h-2 bg-gradient-to-r from-violet-500 via-sky-500 to-cyan-500" />
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Facility Summary
                </CardTitle>
                <CardDescription>
                  A quick glance at clinic readiness
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col space-y-5">
                {[
                  { label: "Emergency Support", value: "96%" },
                  { label: "Room Availability", value: "82%" },
                  { label: "Equipment Readiness", value: "91%" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.12 + index * 0.08 }}
                    className="rounded-2xl bg-slate-50 p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {item.value}
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-200">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: item.value }}
                        transition={{
                          duration: 0.8,
                          delay: 0.25 + index * 0.1,
                        }}
                        className="h-3 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500"
                      />
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                  className="mt-auto rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 p-5 text-white shadow-lg"
                >
                  <p className="text-sm text-white/80">Overall Rating</p>
                  <p className="mt-2 text-3xl font-bold">Excellent</p>
                  <p className="mt-2 text-sm text-white/85">
                    Facilities are maintained at a high standard for smooth
                    clinic operations.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default FacilitiesPage
