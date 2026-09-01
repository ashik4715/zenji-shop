"use client";

import { useState } from "react";

const products = [
  "SELECT PRODUCT",
  "ZENJI — CURSE BREAKER",
  "ZENJI — WAVE FORM",
  "ZENJI — SHADOW SAMURAI",
  "ZENJI — BLOOD MOON",
  "ZENJI — VOID WALKER",
  "ZENJI — STORM CHASER",
];

const tags = [
  "TRUE TO SIZE",
  "RUNS SMALL",
  "RUNS LARGE",
  "PREMIUM QUALITY",
  "FAST SHIPPING",
  "GREAT PACKAGING",
  "WORTH THE WAIT",
];

export default function ReviewPage() {
  const [starRating, setStarRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-zenji-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4">
          WHAT THE COMMUNITY SAYS
        </p>
        <h1 className="font-display text-6xl uppercase tracking-tight mb-12">
          REVIEWS
        </h1>

        {/* Rating Summary */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 p-6 bg-zenji-dark border border-zenji-border rounded-sm">
          <div className="flex flex-col items-center justify-center md:items-start">
            <span className="text-6xl font-display">0</span>
            <span className="text-xs font-mono text-zenji-gray uppercase mt-1">
              OUT OF 5
            </span>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-zenji-border text-lg">
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs font-mono text-zenji-gray mt-2">
              Based on 0 reviews
            </span>
          </div>

          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <span className="text-xs font-mono w-6 text-right">{n}★</span>
                <div className="flex-1 h-2 bg-zenji-black rounded-full overflow-hidden">
                  <div className="h-full bg-zenji-red rounded-full" style={{ width: "0%" }} />
                </div>
                <span className="text-xs font-mono text-zenji-gray w-10 text-right">0%</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zenji-black border border-zenji-border p-3 rounded-sm text-center">
              <span className="text-lg font-display">0</span>
              <p className="text-[10px] font-mono text-zenji-gray uppercase">Published Reviews</p>
            </div>
            <div className="bg-zenji-black border border-zenji-border p-3 rounded-sm text-center">
              <span className="text-lg font-display">—</span>
              <p className="text-[10px] font-mono text-zenji-gray uppercase">Average Rating</p>
            </div>
            <div className="bg-zenji-black border border-zenji-border p-3 rounded-sm text-center">
              <span className="text-lg font-display">0%</span>
              <p className="text-[10px] font-mono text-zenji-gray uppercase">Five Star</p>
            </div>
            <div className="bg-zenji-black border border-zenji-border p-3 rounded-sm text-center">
              <span className="text-lg font-display">0%</span>
              <p className="text-[10px] font-mono text-zenji-gray uppercase">Recommend</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {["ALL", "5★", "4★", "3★", "VERIFIED"].map((tab) => (
            <button
              key={tab}
              className="px-4 py-2 text-xs font-mono uppercase border border-zenji-border hover:border-white transition-colors"
            >
              {tab}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-zenji-gray">
            NEWEST FIRST ↓
          </span>
        </div>

        <p className="text-xs font-mono text-zenji-gray mb-12">
          SHOWING 0 OF 0
        </p>

        {/* Empty State */}
        <div className="text-center py-16 border border-zenji-border mb-16">
          <p className="text-zenji-gray font-mono text-sm">
            No reviews published yet. Be the first.
          </p>
        </div>

        {/* Review Form */}
        <div>
          <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-2">
            VERIFIED PURCHASES ONLY
          </p>
          <h2 className="font-display text-3xl uppercase tracking-tight mb-8">
            LEAVE YOUR VERDICT
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  PRODUCT PURCHASED
                </label>
                <select className="w-full bg-zenji-dark border border-zenji-border rounded-sm px-4 py-3 text-sm text-white focus:border-zenji-red focus:outline-none transition-colors appearance-none">
                  {products.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-zenji-gray mb-2">
                  ORDER NUMBER
                </label>
                <input
                  type="text"
                  className="w-full bg-zenji-dark border border-zenji-border rounded-sm px-4 py-3 text-sm text-white focus:border-zenji-red focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-xs font-mono uppercase text-zenji-gray mb-3">
                STAR RATING
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setStarRating(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="text-3xl transition-colors"
                  >
                    <span
                      className={
                        star <= (hoveredStar || starRating)
                          ? "text-zenji-red"
                          : "text-zenji-border"
                      }
                    >
                      ★
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Review Title */}
            <div>
              <label className="block text-xs font-mono uppercase text-zenji-gray mb-2">
                REVIEW TITLE
              </label>
              <input
                type="text"
                className="w-full bg-zenji-dark border border-zenji-border rounded-sm px-4 py-3 text-sm text-white focus:border-zenji-red focus:outline-none transition-colors"
              />
            </div>

            {/* Review Body */}
            <div>
              <label className="block text-xs font-mono uppercase text-zenji-gray mb-2">
                YOUR REVIEW
              </label>
              <textarea
                rows={5}
                className="w-full bg-zenji-dark border border-zenji-border rounded-sm px-4 py-3 text-sm text-white focus:border-zenji-red focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-xs font-mono uppercase text-zenji-gray mb-3">
                TAGS (OPTIONAL)
              </label>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 text-xs font-mono uppercase border transition-colors ${
                      selectedTags.includes(tag)
                        ? "border-zenji-red text-zenji-red"
                        : "border-zenji-border text-zenji-gray hover:border-white hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-zenji-red text-white py-4 text-xs font-mono uppercase tracking-widest hover:bg-zenji-red/80 transition-colors"
            >
              SUBMIT REVIEW →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
