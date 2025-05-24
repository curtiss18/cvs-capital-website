"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-sage-400 text-white py-2">
        <Container>
          <div className="flex justify-between items-center text-sm">
            <span>Main Office (303) 572-3500</span>
            <div className="hidden md:flex space-x-4">
              <Link href="/about" className="hover:text-sage-100 transition-colors">
                Meet The Team
              </Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-sage-100 transition-colors">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <header className="bg-cream-100 shadow-lg sticky top-0 z-50">
        <Container>
          <nav className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sage-400 to-sage-500 rounded text-white flex items-center justify-center font-bold text-lg">
                CVS
              </div>
              <span className="text-xl font-light tracking-[3px] text-neutral-800 uppercase">
                CVS Capital
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-sage-400 font-medium tracking-wide uppercase text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden sm:inline-flex">
                Schedule Consultation
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-neutral-700 hover:text-sage-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-neutral-200">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-neutral-700 hover:text-sage-400 font-medium tracking-wide uppercase text-sm transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="w-full sm:hidden mt-4">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          )}
        </Container>
      </header>
    </>
  )
}
