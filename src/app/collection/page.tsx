"use client";

import { useState, useMemo } from "react";
import products from "@/data/products.json";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

type Filter = "ALL" | "SALE" | "NEW_ARRIVAL" | "LIMITED" | "ZANGETSU";

const FILTERS: Filter[] = ["ALL", "SALE", "NEW_ARRIVAL", "LIMITED", "ZANGETSU"];

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const allProducts = products as Product[];

  const filtered = useMemo(() => {
    let result = allProducts;

    switch (activeFilter) {
      case "SALE":
        result = result.filter((p) => p.onSale);
        break;
      case "NEW_ARRIVAL":
        result = result.filter((p) => p.tags.includes("new-arrival"));
        break;
      case "LIMITED":
        result = result.filter((p) => p.tags.includes("limited"));
        break;
      case "ZANGETSU":
        result = result.filter(
          (p) =>
            p.tags.includes("limited") ||
            p.tags.includes("new-arrival")
        );
        break;
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeFilter, search, allProducts]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    localStorage.setItem("zenji_newsletter", email);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-zenji-black">
      {/* Header */}
      <section className="px-6 md:px-12 pt-32 pb-16 border-b border-zenji-border">
        <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4">
          THE_ORIGIN_DROP // COMPLETE ARCHIVE
        </p>
        <h1 className="font-display text-5xl md:text-7xl uppercase text-white leading-none mb-6">
          ANIME GRAPHIC TEES — THE FULL COLLECTION
        </h1>
        <p className="text-zenji-gray text-sm font-mono mb-8">
          Every drop. Every arc. Documented.
        </p>
        <div className="flex flex-col sm:flex-row justify-between text-xs font-mono text-zenji-gray uppercase tracking-wider">
          <span>10 PIECES // THE_ORIGIN_DROP // EST.2024</span>
          <span>AUSTRALIA-WIDE SHIPPING</span>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 py-8 border-b border-zenji-border">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 border text-xs font-mono uppercase tracking-wider transition-colors ${
                  activeFilter === f
                    ? "bg-white text-zenji-black border-white"
                    : "border-zenji-border text-white hover:border-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <input
              type="text"
              placeholder="SEARCH..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 lg:w-64 bg-transparent border border-zenji-border px-4 py-2 text-xs font-mono text-white placeholder-zenji-gray focus:outline-none focus:border-white transition-colors"
            />
            <span className="text-xs font-mono text-zenji-gray uppercase whitespace-nowrap">
              {filtered.length} ITEMS
            </span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-12 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-zenji-gray font-mono text-sm uppercase">
              No products found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} variant="grid" />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="px-6 md:px-12 py-24 border-t border-zenji-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-5xl uppercase text-white mb-4">
            MORE DROPS COMING
          </h2>
          <p className="text-zenji-red text-sm font-mono uppercase tracking-widest mb-10">
            AWAKENING // REDACTED
          </p>
          {subscribed ? (
            <p className="text-zenji-red font-mono text-sm uppercase tracking-wider">
              ✓ You&apos;re on the list. We&apos;ll be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent border border-zenji-border px-4 py-3 text-xs font-mono text-white placeholder-zenji-gray focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-zenji-red text-white text-xs font-mono uppercase tracking-wider hover:bg-zenji-red/80 transition-colors"
              >
                NOTIFY ME
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
