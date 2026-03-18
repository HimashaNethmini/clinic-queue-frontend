import { Card, CardContent } from "@/components/ui/card"

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">
      <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-20 lg:px-10">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-cyan-300/30 blur-3xl" />

        <Card className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500" />

          <CardContent className="px-10 py-14">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                About ClinicQ
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                ClinicQ is a modern queue management system designed to help clinics
                organize patient flow efficiently, reduce waiting time, and improve the
                overall healthcare experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-0 bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Smart Queue</h3>
                  <p className="text-sm text-white/90">
                    Automatically manage patient queues and display the current
                    queue number clearly for patients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Clinic Dashboard</h3>
                  <p className="text-sm text-white/90">
                    Doctors and staff can monitor patient flow and manage queues
                    easily through a modern dashboard.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Better Experience</h3>
                  <p className="text-sm text-white/90">
                    Reduce waiting room congestion and provide patients with
                    a clear, organized experience.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} ClinicQ. All rights reserved.
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default AboutPage