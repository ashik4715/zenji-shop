"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import type { Product } from "@/lib/types";

const allProducts = products as Product[];
const saleProducts = allProducts.filter((p) => p.onSale);

export default function DropPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("zenji-waitlist-email");
    if (stored) {
      setSubmitted(true);
    }
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      localStorage.setItem("zenji-waitlist-email", email.trim());
      setSubmitted(true);
    }
  }

  return (
    <main className="min-h-screen bg-zenji-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zenji-black via-zenji-black/80 to-zenji-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zenji-red/10 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4 space-y-8">
          <p className="font-mono text-zenji-red text-xs tracking-[0.3em] uppercase">
            ⚡ INCOMING TRANSMISSION
          </p>
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider leading-none">
            AWAKENING <span className="text-zenji-red">IS LIVE.</span>
          </h1>
          <p className="text-zenji-gray font-mono text-sm tracking-widest max-w-md mx-auto">
            The next chapter begins. Are you ready?
          </p>
          <p className="font-mono text-xs text-zenji-gray tracking-[0.3em] uppercase">
            DROP DATE: 01 SEPT 2026
          </p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4 md:px-8 space-y-12">
        <div className="max-w-7xl mx-auto space-y-6 text-center">
          <p className="font-mono text-zenji-red text-xs tracking-[0.3em] uppercase">
            ⚡ AWAKENING // IS LIVE
          </p>
          <div className="flex justify-center">
            <CountdownTimer targetDate="2026-09-01T00:00:00" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-wider">
            THE DROP IS COMING
          </h2>
          <p className="font-mono text-xs text-zenji-gray tracking-[0.3em] uppercase">
            01 SEPTEMBER 2026 — AUSTRALIA
          </p>
          <Link
            href="/collection"
            className="inline-block bg-zenji-red text-white font-mono text-xs uppercase px-8 py-4 tracking-widest hover:bg-zenji-red/80 transition-colors"
          >
            THE WAIT IS OVER — ENTER THE ARCHIVE →
          </Link>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-4 md:px-8 bg-zenji-dark/30">
        <div className="max-w-xl mx-auto space-y-8 text-center">
          <p className="font-mono text-zenji-red text-xs tracking-[0.3em] uppercase">
            GET EARLY ACCESS
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider">
            JOIN THE WAITLIST
          </h2>
          <p className="text-zenji-gray font-mono text-sm leading-relaxed">
            Be first to shop Awakening. Exclusive early access + pre-drop
            discount for waitlist members.
          </p>
          {submitted ? (
            <div className="border border-zenji-red/50 p-6 space-y-2">
              <p className="font-display text-xl text-zenji-red uppercase">
                You&apos;re on the list!
              </p>
              <p className="font-mono text-xs text-zenji-gray tracking-widest">
                WE&apos;LL BE IN TOUCH.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-zenji-border text-white font-mono text-xs uppercase px-4 py-4 tracking-widest placeholder:text-zenji-gray focus:border-zenji-red outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-zenji-red text-white font-mono text-xs uppercase px-8 py-4 tracking-widest hover:bg-zenji-red/80 transition-colors whitespace-nowrap"
              >
                JOIN THE WAITLIST →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* While You Wait Section */}
      <section className="py-20 px-4 md:px-8 space-y-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="font-mono text-zenji-red text-xs tracking-[0.3em] uppercase">
            THE_ORIGIN_DROP // STILL AVAILABLE
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider">
            WHILE YOU WAIT.
          </h2>
          <p className="text-zenji-gray font-mono text-sm">
            Shop The Origin Drop, our current collection.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/collection"
            className="inline-block border border-zenji-border text-white font-mono text-xs uppercase px-8 py-4 tracking-widest hover:border-white transition-colors"
          >
            VIEW FULL COLLECTION →
          </Link>
        </div>
      </section>
    </main>
  );
}
