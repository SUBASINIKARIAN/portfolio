"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { nav, site } from "@/data/portfolio";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass-strong flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-3">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          {site.wordmark}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.resumeUrl}
          download
          className="hidden items-center gap-1.5 rounded-full bg-foreground/10 px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/20 md:inline-flex"
        >
          <Download size={14} />
          Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong absolute left-4 right-4 top-[4.5rem] rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeUrl}
                download
                className="mt-1 flex items-center gap-1.5 rounded-lg bg-foreground/10 px-3 py-2 text-sm font-medium text-foreground"
              >
                <Download size={14} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
