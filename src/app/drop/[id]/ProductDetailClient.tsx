"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";

const sizes = ["S", "M", "L", "XL", "XXL"] as const;

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Size Selector */}
      <div className="space-y-4">
        <p className="font-mono text-xs text-zenji-gray tracking-widest uppercase">
          SELECT SIZE
        </p>
        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 border font-mono text-xs uppercase flex items-center justify-center transition-colors ${
                selectedSize === size
                  ? "border-zenji-red bg-zenji-red text-white"
                  : "border-zenji-border text-white hover:border-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <button className="w-full bg-zenji-red text-white font-mono text-xs uppercase px-8 py-4 tracking-widest hover:bg-zenji-red/80 transition-colors">
        ADD TO CART →
      </button>
    </div>
  );
}
