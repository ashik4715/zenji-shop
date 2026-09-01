"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "horizontal";
}

export default function ProductCard({ product, variant = "grid" }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  const hasSecondImage = product.images.length > 1;
  const displayImage =
    hovered && hasSecondImage ? product.images[1] : product.heroImage || product.images[0];

  if (variant === "horizontal") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href={`/drop/${product.id}`}
          className="group flex flex-col sm:flex-row gap-6 bg-zenji-dark border border-zenji-border rounded-sm overflow-hidden hover:border-zenji-red/50 transition-colors"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="relative w-full sm:w-80 h-80 sm:h-auto shrink-0 overflow-hidden bg-zenji-black">
            <Image
              src={displayImage}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover transition-opacity duration-300"
            />
            {product.onSale && (
              <div className="absolute top-0 right-0 bg-zenji-red text-white text-[10px] font-mono uppercase px-3 py-1">
                SALE
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-4 py-6 pr-6">
            <h3 className="font-display text-lg uppercase text-white tracking-wider">
              {product.name}
            </h3>
            <div className="flex items-center gap-3">
              {product.onSale && product.salePrice !== null ? (
                <>
                  <span className="text-zenji-gray line-through text-sm">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-zenji-red font-bold text-lg">
                    ${product.salePrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-white font-bold text-lg">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex gap-3 mt-2">
              <button className="px-4 py-2 border border-zenji-border text-xs font-mono uppercase text-white hover:border-white transition-colors">
                ♡ WISHLIST
              </button>
              <button className="px-4 py-2 bg-zenji-red text-white text-xs font-mono uppercase hover:bg-zenji-red/80 transition-colors">
                ADD TO CART →
              </button>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href={`/drop/${product.id}`}
        className="group block bg-zenji-dark border border-zenji-border rounded-sm overflow-hidden hover:border-zenji-red/50 transition-colors"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden bg-zenji-black">
          <Image
            src={displayImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-opacity duration-300"
          />
          {product.onSale && (
            <div className="absolute top-0 right-0 bg-zenji-red text-white text-[10px] font-mono uppercase px-3 py-1">
              SALE
            </div>
          )}
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-display text-sm uppercase text-white tracking-wider truncate">
            {product.name}
          </h3>
          <div className="flex items-center gap-3">
            {product.onSale && product.salePrice !== null ? (
              <>
                <span className="text-zenji-gray line-through text-xs">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-zenji-red font-bold text-sm">
                  ${product.salePrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-white font-bold text-sm">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
