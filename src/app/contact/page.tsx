"use client";

import { useState } from "react";

const subjects = [
  "SELECT SUBJECT",
  "ORDER ISSUE",
  "RETURN REQUEST",
  "PRODUCT QUESTION",
  "COLLABORATION",
  "PRESS ENQUIRY",
  "GENERAL",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zenji-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4">
          WE READ EVERY MESSAGE.
        </p>
        <h1 className="font-display text-6xl uppercase tracking-tight mb-16">
          CONTACT
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Support Card */}
            <div className="bg-zenji-dark border border-zenji-border p-6 rounded-sm">
              <h3 className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-3">
                SUPPORT
              </h3>
              <a
                href="mailto:support@zenji.shop"
                className="text-lg font-mono text-white hover:text-zenji-red transition-colors"
              >
                SUPPORT@ZENJI.SHOP
              </a>
              <p className="text-sm text-zenji-gray mt-2">
                Order issues, returns, product questions — we&apos;ve got you.
              </p>
              <a
                href="mailto:support@zenji.shop"
                className="inline-block mt-4 px-6 py-3 bg-zenji-red text-white text-xs font-mono uppercase tracking-widest hover:bg-zenji-red/80 transition-colors"
              >
                EMAIL US →
              </a>
            </div>

            {/* Collabs Card */}
            <div className="bg-zenji-dark border border-zenji-border p-6 rounded-sm">
              <h3 className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-3">
                COLLABS & PRESS
              </h3>
              <a
                href="mailto:collabs@zenji.shop"
                className="text-lg font-mono text-white hover:text-zenji-red transition-colors"
              >
                COLLABS@ZENJI.SHOP
              </a>
              <p className="text-sm text-zenji-gray mt-2">
                Brand deals, creator partnerships, and press enquiries.
              </p>
              <a
                href="mailto:collabs@zenji.shop"
                className="inline-block mt-4 px-6 py-3 border border-zenji-border text-white text-xs font-mono uppercase tracking-widest hover:border-white transition-colors"
              >
                GET IN TOUCH →
              </a>
            </div>

            {/* Social Card */}
            <div className="bg-zenji-dark border border-zenji-border p-6 rounded-sm">
              <h3 className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-3">
                FOLLOW THE LORE
              </h3>
              <ul className="space-y-2 text-sm text-zenji-gray">
                <li>
                  Instagram{" "}
                  <a href="#" className="text-white hover:text-zenji-red transition-colors">
                    @zenji_.shop
                  </a>
                </li>
                <li>
                  TikTok{" "}
                  <a href="#" className="text-white hover:text-zenji-red transition-colors">
                    @zenji_.shop
                  </a>
                </li>
                <li>
                  Facebook{" "}
                  <a href="#" className="text-white hover:text-zenji-red transition-colors">
                    ZENJI
                  </a>
                </li>
              </ul>
              <p className="text-xs text-zenji-gray mt-4 italic">
                DMs open on Instagram
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight mb-8">
              SEND US A MESSAGE
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-mono uppercase text-zenji-gray mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  className="w-full bg-zenji-dark border border-zenji-border rounded-sm px-4 py-3 text-sm text-white focus:border-zenji-red focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-zenji-gray mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full bg-zenji-dark border border-zenji-border rounded-sm px-4 py-3 text-sm text-white focus:border-zenji-red focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-zenji-gray mb-2">
                  ORDER NUMBER <span className="text-zenji-gray">(OPTIONAL)</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-zenji-dark border border-zenji-border rounded-sm px-4 py-3 text-sm text-white focus:border-zenji-red focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-zenji-gray mb-2">
                  SUBJECT
                </label>
                <select className="w-full bg-zenji-dark border border-zenji-border rounded-sm px-4 py-3 text-sm text-white focus:border-zenji-red focus:outline-none transition-colors appearance-none">
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-zenji-gray mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-zenji-dark border border-zenji-border rounded-sm px-4 py-3 text-sm text-white focus:border-zenji-red focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-zenji-red text-white py-4 text-xs font-mono uppercase tracking-widest hover:bg-zenji-red/80 transition-colors"
              >
                SEND MESSAGE →
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-zenji-border">
          <h3 className="text-xs font-mono uppercase text-zenji-gray tracking-widest mb-4">
            BEFORE YOU EMAIL →
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/faq"
              className="text-sm font-mono text-white hover:text-zenji-red transition-colors"
            >
              FAQ →
            </a>
            <a
              href="/return-policy"
              className="text-sm font-mono text-white hover:text-zenji-red transition-colors"
            >
              RETURN POLICY →
            </a>
            <a
              href="/faq"
              className="text-sm font-mono text-white hover:text-zenji-red transition-colors"
            >
              SIZE GUIDE →
            </a>
            <a
              href="/account/orders"
              className="text-sm font-mono text-white hover:text-zenji-red transition-colors"
            >
              TRACK ORDER →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
