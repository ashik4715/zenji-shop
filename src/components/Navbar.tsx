"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "DROP", href: "/drop" },
  { label: "COLLECTION", href: "/collection" },
  { label: "LOOKBOOK", href: "/lookbook" },
  { label: "OUR STORY", href: "/our-story" },
];

const moreLinks = [
  { label: "Collaboration", href: "/contact" },
  { label: "Review", href: "/review" },
  { label: "FAQ", href: "/faq" },
  { label: "Help", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-zenji-black/95 backdrop-blur border-b border-zenji-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 h-16">
        <Link href="/" className="font-display text-xl font-bold text-white tracking-widest">
          ZENJI
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="text-xs font-mono uppercase text-white/80 hover:text-white transition-colors flex items-center gap-1">
              MORE <span className="text-[10px]">∨</span>
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-zenji-black border border-zenji-border rounded-sm py-2 min-w-[180px]">
                {moreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 text-xs font-mono uppercase text-white/80 hover:text-white hover:bg-zenji-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button aria-label="Search" className="text-white/80 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <Link href="/wishlist" aria-label="Wishlist" className="text-white/80 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </Link>
          <button
            aria-label="Cart"
            onClick={openCart}
            className="relative text-white/80 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-zenji-red text-white text-[10px] font-mono rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <Link href="/login" aria-label="Account" className="text-white/80 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-zenji-black border-t border-zenji-border px-4 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-sm font-mono uppercase text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="space-y-2">
            {moreLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm font-mono uppercase text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6 pt-4 border-t border-zenji-border">
            <button aria-label="Search" className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <Link href="/wishlist" aria-label="Wishlist" className="text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </Link>
            <button
              aria-label="Cart"
              onClick={() => { openCart(); setMobileOpen(false); }}
              className="relative text-white/80 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-zenji-red text-white text-[10px] font-mono rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <Link href="/login" aria-label="Account" className="text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
