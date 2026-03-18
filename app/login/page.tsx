import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const LoginPage = () =>{
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">

      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center overflow-hidden px-6 py-16 lg:px-10">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-cyan-300/30 blur-3xl" />

        <Card className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/60 bg-white/85 shadow-2xl shadow-sky-100 backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500" />

          <CardContent className="px-8 py-10">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-xl font-bold text-white shadow-md">
                CQ
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Sign in to access your ClinicQ dashboard
              </p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-700">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="text-sm font-medium text-sky-600 transition hover:text-cyan-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-12 rounded-xl border-slate-200 bg-white/80 focus-visible:ring-cyan-400"
                />
              </div>

              <Button className="h-12 w-full rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-base font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:scale-[1.01] hover:shadow-sky-300">
                Sign In
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                href="/create-account"
                className="font-semibold text-sky-600 transition hover:text-cyan-600"
              >
                Create new account
              </Link>
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default LoginPage;