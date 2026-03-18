import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-100 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-white/40 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Website Name - Left */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white font-bold shadow-md">
              CQ
            </div>
            <h1 className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
              ClinicQ
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-2 py-2 shadow-sm md:flex">
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow"
            >
              Queue
            </a>
            <a
              href="#"
              className="rounded-full px-5 py-2 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-sky-700"
            >
              Our Facilities
            </a>
            <a
              href="#"
              className="rounded-full px-5 py-2 text-sm font-medium text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-700"
            >
              About Us
            </a>
          </nav>

          {/* Login Button - Right */}
          <div>
            <Button className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:scale-105 hover:shadow-sky-300">
              Login
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex items-center justify-center gap-3 border-t border-slate-200 px-4 py-3 md:hidden">
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Queue
          </a>
          <a className="rounded-full px-4 py-2 text-sm font-medium text-slate-600">
            Our Facilities
          </a>
          <a className="rounded-full px-4 py-2 text-sm font-medium text-slate-600">
            About Us
          </a>
        </nav>
      </header>
    </main>
  );
}
export default Navbar