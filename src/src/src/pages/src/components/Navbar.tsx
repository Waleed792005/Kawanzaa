/**
 * src/components/Navbar.tsx
 * شريط تنقل علوي بسيط وثابت مع رابط للصفحة الرئيسية ورابط تصدير الكود.
 */

import React from "react"
import { Link } from "react-router"
import { ShoppingCart } from "lucide-react"

/** شريط التنقل */
export default function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-slate-800">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white shadow-soft">
            <ShoppingCart size={18} />
          </span>
          <span>Web Creator</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
            المزايا
          </a>
          <a href="#/export" className="text-slate-600 hover:text-slate-900 transition-colors">
            تصدير الكود
          </a>
        </nav>
      </div>
    </header>
  )
}
