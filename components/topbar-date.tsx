"use client";

import { CalendarDays } from "lucide-react";

export default function TopbarDate() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="hidden md:flex h-11 items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-5 shadow-sm backdrop-blur">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100">
        <CalendarDays className="h-4 w-4 text-cyan-700" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
          Today
        </span>

        <span className="text-sm font-semibold text-slate-700">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}