import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const CreateAccount = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">

      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center overflow-hidden px-6 py-16 lg:px-10">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-cyan-300/30 blur-3xl" />

        <Card className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500" />

          <CardContent className="px-8 py-10 md:px-10">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-xl font-bold text-white shadow-md">
                CQ
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Create New Account
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Set up your clinic management account
              </p>
            </div>

            <form className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-slate-700">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-slate-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Perera"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email" className="text-slate-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="clinic@example.com"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="+94 77 123 4567"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clinicName" className="text-slate-700">
                  Clinic Name
                </Label>
                <Input
                  id="clinicName"
                  placeholder="City Care Clinic"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create password"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-slate-700">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                />
              </div>

              <div className="md:col-span-2">
                <Button className="h-12 w-full rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-base font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:scale-[1.01] hover:shadow-sky-300">
                  Create Account
                </Button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-sky-600 transition hover:text-cyan-600"
              >
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default CreateAccount