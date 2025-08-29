"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-2 py-1 rounded transition ${
        active ? "text-blue-600 font-semibold" : "hover:text-blue-500"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/90 dark:bg-gray-800/90 shadow sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          Senex Med <span className="opacity-60">| Manisa OSB</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li><NavLink href="/">Ana Sayfa</NavLink></li>
          <li><NavLink href="/ilanlar">İlanlar</NavLink></li>
          <li><NavLink href="/fabrikalar">Fabrikalar</NavLink></li>
          <li><NavLink href="/osb">OSB Bilgileri</NavLink></li>
          <li><NavLink href="/iletisim">İletişim</NavLink></li>
          <li><ThemeToggle /></li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden border rounded px-3 py-2"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menüyü aç/kapat"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-3 space-y-2 text-sm">
            <NavLink href="/">Ana Sayfa</NavLink>
            <NavLink href="/ilanlar">İlanlar</NavLink>
            <NavLink href="/fabrikalar">Fabrikalar</NavLink>
            <NavLink href="/osb">OSB Bilgileri</NavLink>
            <NavLink href="/iletisim">İletişim</NavLink>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}

/* Tema butonu (dark / light switch) */
function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      className="border rounded px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {dark ? "🌞 Aydınlık" : "🌙 Karanlık"}
    </button>
  );
}
