"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import type { Product } from "@/lib/types";

type LookTab = "ALL" | "FRONT" | "BACK" | "ON_MODEL";

const LOOK_TABS: LookTab[] = ["ALL", "FRONT", "BACK", "ON_MODEL"];

interface LookImage {
  src: string;
  alt: string;
  view: "front" | "back";
  productName: string;
}

export default function LookbookPage() {
  const [activeTab, setActiveTab] = useState<LookTab>("ALL");

  const allProducts = products as Product[];

  const allImages = useMemo<LookImage[]>(() => {
    const images: LookImage[] = [];
    allProducts.forEach((p) => {
      if (p.images[0]) {
        images.push({
          src: p.images[0],
          alt: `${p.name} - Front`,
          view: "front",
          productName: p.name,
        });
      }
      if (p.images[1]) {
        images.push({
          src: p.images[1],
          alt: `${p.name} - Back`,
          view: "back",
          productName: p.name,
        });
      }
      if (p.heroImage) {
        images.push({
          src: p.heroImage,
          alt: `${p.name} - On Model`,
          view: "front",
          productName: p.name,
        });
      }
    });
    return images;
  }, [allProducts]);

  const filteredImages = useMemo(() => {
    if (activeTab === "ALL") return allImages;
    if (activeTab === "ON_MODEL") return allImages.filter((_, i) => i % 3 === 2);
    if (activeTab === "FRONT") return allImages.filter((img) => img.view === "front");
    if (activeTab === "BACK") return allImages.filter((img) => img.view === "back");
    return allImages;
  }, [activeTab, allImages]);

  const displayImages = useMemo(() => {
    const shuffled = [...filteredImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [filteredImages]);

  const columns = [
    displayImages.filter((_, i) => i % 3 === 0),
    displayImages.filter((_, i) => i % 3 === 1),
    displayImages.filter((_, i) => i % 3 === 2),
  ];

  return (
    <main className="min-h-screen bg-zenji-black">
      {/* Header */}
      <section className="px-6 md:px-12 pt-32 pb-16 border-b border-zenji-border">
        <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4">
          THE_ORIGIN_DROP // EDITORIAL
        </p>
        <h1 className="font-display text-5xl md:text-7xl uppercase text-white leading-none mb-6">
          ANIME STREETWEAR — LOOKBOOK
        </h1>
        <p className="text-zenji-gray text-sm font-mono mb-8">
          The Origin Drop. The Full Visual Archive.
        </p>
        <div className="flex flex-col sm:flex-row justify-between text-xs font-mono text-zenji-gray uppercase tracking-wider">
          <span>10 PIECES // THE_ORIGIN_DROP</span>
          <span>AUSTRALIA-WIDE SHIPPING</span>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 md:px-12 py-8 border-b border-zenji-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {LOOK_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 border text-xs font-mono uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? "bg-white text-zenji-black border-white"
                    : "border-zenji-border text-white hover:border-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <span className="text-xs font-mono text-zenji-gray uppercase">
            {filteredImages.length} IMAGES
          </span>
        </div>
      </section>

      {/* Masonry Photo Grid */}
      <section className="px-6 md:px-12 py-12">
        {displayImages.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-zenji-gray font-mono text-sm uppercase">
              No images found.
            </p>
          </div>
        ) : (
          <div className="hidden md:grid grid-cols-3 gap-4">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {col.map((img, imgIndex) => (
                  <div
                    key={`${colIndex}-${imgIndex}`}
                    className="relative overflow-hidden group bg-zenji-dark"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={800}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Tablet - 2 columns */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-4">
          {displayImages.map((img, i) => (
            <div
              key={`tablet-${i}`}
              className="relative overflow-hidden group bg-zenji-dark"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Mobile - 1 column */}
        <div className="sm:hidden flex flex-col gap-4">
          {displayImages.map((img, i) => (
            <div
              key={`mobile-${i}`}
              className="relative overflow-hidden group bg-zenji-dark"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-24 border-t border-zenji-border text-center">
        <h2 className="font-display text-4xl md:text-5xl uppercase text-white mb-4">
          SHOP THE COLLECTION
        </h2>
        <p className="text-zenji-gray text-sm font-mono mb-10">
          Limited drops. No restocks. Ever.
        </p>
        <Link
          href="/collection"
          className="inline-block px-10 py-4 bg-zenji-red text-white text-xs font-mono uppercase tracking-wider hover:bg-zenji-red/80 transition-colors"
        >
          SHOP NOW
        </Link>
      </section>
    </main>
  );
}
