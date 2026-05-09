import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Queue = () => {

  const queue = {
    current: "A12",
    previous: "A11",
    next: "A13",
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">
      <section className="relative mx-auto flex max-w-7xl items-center justify-center overflow-hidden px-6 py-16 lg:min-h-[calc(100vh-80px)] lg:px-10">
        {/* Decorative background */}
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-cyan-300/30 blur-3xl" />

        <Card className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500" />

          <CardContent className="px-8 py-14 md:px-14">
            <div className="flex flex-col items-center text-center">
              <p className="mb-4 text-sm  font-extrabold uppercase tracking-[0.25em] text-sky-600 text-xl">
                Now Serving
              </p>

              <div className="relative mb-12 flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-cyan-100 shadow-inner md:h-72 md:w-72">
                <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-7xl font-black text-transparent md:text-8xl">
                  {queue.current}
                </span>
              </div>
            </div>

            <div className="mx-auto mb-8 h-px max-w-3xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="rounded-2xl border-0 bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg transition hover:-translate-y-1">
                <CardContent className="px-6 py-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                    Previous
                  </p>
                  <div className="mt-2 text-5xl font-black tracking-tight">
                    {queue.previous}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-0 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg transition hover:-translate-y-1">
                <CardContent className="px-6 py-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                    Next
                  </p>
                  <div className="mt-2 text-5xl font-black tracking-tight">
                    {queue.next}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>
   </main>
  );
}

export default Queue
