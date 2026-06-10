"use client"

import { useState } from "react"
import Link from "next/link"

const vendorGuideItems = [
  { label: "Core Services", href: "#core-services" },
  { label: "Vendor Code of Conduct", href: "#vendor-code-of-conduct" },
  { label: "How It Works", href: "#how-it-works" },
]

// Base classes shared by every nav link
const navBase =
  "relative text-sm font-medium py-1 transition-colors duration-200 " +
  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full " +
  "after:bg-deloitte-green after:origin-left after:transition-transform after:duration-200 " +
  "hover:text-deloitte-green hover:after:scale-x-100"

function navClass(active: boolean) {
  return `${navBase} ${active ? "text-deloitte-green after:scale-x-100" : "text-deloitte-dark-gray after:scale-x-0"}`
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [vendorDropdownOpen, setVendorDropdownOpen] = useState(false)
  const [activeNav, setActiveNav] = useState<string | null>(null)

  function scrollTo(href: string) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setActiveNav(href)
    setMobileOpen(false)
    setVendorDropdownOpen(false)
  }

  const vendorActive = vendorGuideItems.some((i) => i.href === activeNav)

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-deloitte-light-gray shadow-sm">
      <div className="w-4/5 mx-auto flex items-center h-22.25">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo_of_Deloitte.svg" alt="Deloitte GPS Vendor Connect" width={140} height={27} className="h-7 w-auto" />
        </Link>

        {/* Desktop nav — sits right next to the logo */}
        <nav className="hidden md:flex items-center gap-8 ml-10" aria-label="Main navigation">

          {/* Business Program */}
          <button onClick={() => scrollTo("#business-program")} className={navClass(activeNav === "#business-program")}>
            Business Program
          </button>

          {/* Vendor Guide — hover-open dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1.5 ${navClass(vendorActive)}`} aria-haspopup="listbox">
              Vendor Guide
              <ChevronDown className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Dark dropdown panel */}
            <ul
              className="absolute top-full left-0 min-w-57.5 bg-deloitte-black rounded-xl shadow-2xl
                         pt-3 pb-1.5 opacity-0 invisible translate-y-2 pointer-events-none
                         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto
                         transition-all duration-200 ease-out z-50"
              role="listbox"
            >
              {vendorGuideItems.map((item) => (
                <li key={item.href} role="option">
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150
                                first:rounded-t-xl last:rounded-b-xl hover:bg-white/8
                                ${activeNav === item.href ? "text-deloitte-green" : "text-deloitte-light-gray hover:text-deloitte-green"}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Team */}
          <button onClick={() => scrollTo("#our-team")} className={navClass(activeNav === "#our-team")}>
            Our Team
          </button>
        </nav>

        {/* Right side: Login + CTA — pushed to far right */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <Link href="#login" className={navClass(activeNav === "#login")}>
            Login
          </Link>

          <Link
            href="#vendor-registration"
            onClick={(e) => { e.preventDefault(); scrollTo("#vendor-registration") }}
            className="inline-flex items-center gap-2 bg-deloitte-green text-white text-sm font-semibold
                       px-6 py-3 rounded-full hover:bg-deloitte-green-dark active:scale-95
                       transition-all duration-200 shadow-sm"
          >
            Register Now
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 ml-auto text-deloitte-dark-gray hover:text-deloitte-black transition-colors duration-200"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="relative flex w-6 h-6 items-center justify-center">
            <span className={`absolute inset-0 transition-all duration-200 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}>
              <XIcon />
            </span>
            <span className={`absolute inset-0 transition-all duration-200 ${mobileOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}>
              <MenuIcon />
            </span>
          </span>
        </button>
      </div>

      {/* Mobile menu — slides down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-deloitte-light-gray
                    ${mobileOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="w-4/5 mx-auto flex flex-col py-4 gap-0.5" aria-label="Mobile navigation">

          {/* Vendor Guide with click-toggle sub-list */}
          <div>
            <button
              onClick={() => setVendorDropdownOpen((v) => !v)}
              className={`w-full flex items-center justify-between px-2 py-3 text-sm font-medium transition-colors duration-150
                          ${vendorActive ? "text-deloitte-green" : "text-deloitte-dark-gray hover:text-deloitte-green"}`}
              aria-expanded={vendorDropdownOpen}
            >
              Vendor Guide
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${vendorDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <ul className={`overflow-hidden transition-all duration-200 bg-deloitte-black mx-2 ${vendorDropdownOpen ? "max-h-52 opacity-100" : "max-h-0 opacity-0"}`}>
              {vendorGuideItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`w-full text-left pl-5 pr-2 py-2.5 text-sm border-l-2 border-deloitte-green ml-2 transition-colors duration-150
                                ${activeNav === item.href ? "text-deloitte-green" : "text-deloitte-light-gray hover:text-deloitte-green"}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => scrollTo("#our-team")}
            className={`text-left px-2 py-3 text-sm font-medium transition-colors duration-150
                        ${activeNav === "#our-team" ? "text-deloitte-green" : "text-deloitte-dark-gray hover:text-deloitte-green"}`}
          >
            Our Team
          </button>

          <Link
            href="#login"
            onClick={() => setMobileOpen(false)}
            className={`px-2 py-3 text-sm font-medium transition-colors duration-150
                        ${activeNav === "#login" ? "text-deloitte-green" : "text-deloitte-dark-gray hover:text-deloitte-green"}`}
          >
            Login
          </Link>

          <div className="pt-3 pb-1">
            <Link
              href="#vendor-registration"
              onClick={(e) => { e.preventDefault(); scrollTo("#vendor-registration") }}
              className="inline-flex items-center gap-2 bg-deloitte-green text-white text-sm font-semibold
                         px-6 py-3 rounded-full hover:bg-deloitte-green-dark active:scale-95 transition-all duration-200"
            >
              Register Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}
