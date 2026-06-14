'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { cn } from '@/lib/utils'

const COPY = {
  clinicName:  "Dr. Prem's Animal Hospital",
  labSuffix:   '& Pathology Lab',
  logoAlt:     "Dr. Prem's Animal Hospital logo",
  openMenu:    'Open navigation menu',
  closeMenu:   'Close navigation menu',
  book:        'Book a visit',
} as const

const NAV_LINKS = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/services',  label: 'Services' },
  { href: '/contactus', label: 'Contact Us' },
  { href: '/blog',      label: 'Blog' },
] as const

export function Navbar() {
  const pathname = usePathname()
  const { isOpen, toggle, close } = useMobileMenu()

  return (
    <div
      className="sticky top-0 z-50 bg-cream/[0.92] backdrop-blur-[10px] border-b border-[#ECE4D5]"
    >
      <div className="max-w-container mx-auto flex items-center justify-between px-10 py-[14px]">

        {/* Logo + name */}
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-[13px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
        >
          <Image
            src="/images/logo.svg"
            alt={COPY.logoAlt}
            width={48}
            height={48}
            priority
            className="object-contain"
          />
          <div>
            <div className="font-display font-semibold text-[18px] text-primary leading-[1.05] whitespace-nowrap">
              {COPY.clinicName}
            </div>
            <div className="text-[11px] tracking-[1.8px] uppercase text-tan font-bold mt-[3px] whitespace-nowrap">
              {COPY.labSuffix}
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href.split('#')[0]))
            return (
              <Link
                key={label}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className="flex flex-col items-center gap-[6px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              >
                <span
                  className={cn(
                    'font-sans text-[14.5px] font-semibold motion-safe:transition-colors',
                    isActive ? 'text-primary' : 'text-[#5C5648] group-hover:text-primary'
                  )}
                >
                  {label}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'h-[2px] w-full rounded-[2px] motion-safe:transition-all',
                    isActive ? 'bg-accent' : 'bg-transparent group-hover:bg-accent/40'
                  )}
                />
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="hidden md:inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-sans font-bold text-[14.5px] px-[22px] py-[11px] rounded-[9px] shadow-book motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {COPY.book}
          </Link>

          <button
            type="button"
            aria-label={isOpen ? COPY.closeMenu : COPY.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={toggle}
            className="md:hidden p-2 rounded-md text-primary hover:bg-cream-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-safe:transition-colors"
          >
            {isOpen
              ? <X aria-hidden="true" className="h-5 w-5" />
              : <Menu aria-hidden="true" className="h-5 w-5" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden bg-cream/[0.97] backdrop-blur-[10px] border-t border-[#ECE4D5] py-4 px-6 space-y-1"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href.split('#')[0]))
            return (
              <Link
                key={label}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                onClick={close}
                className={cn(
                  'block px-3 py-2.5 rounded-md font-sans text-sm font-semibold motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  isActive
                    ? 'text-primary bg-accent-light'
                    : 'text-[#5C5648] hover:text-primary hover:bg-cream-2'
                )}
              >
                {label}
              </Link>
            )
          })}
          <div className="pt-3">
            <Link
              href="/book"
              onClick={close}
              className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-sans font-bold text-sm px-4 py-3 rounded-[9px] shadow-book motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {COPY.book}
            </Link>
          </div>
        </nav>
      )}
    </div>
  )
}
