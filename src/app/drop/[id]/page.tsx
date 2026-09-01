import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import type { Product } from "@/lib/types";
import ProductDetailClient from "./ProductDetailClient";

const allProducts = products as Product[];

export function generateStaticParams() {
  return allProducts.map((product) => ({ id: product.id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-zenji-black flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="font-display text-4xl text-white uppercase">
            Product not found
          </h1>
          <Link
            href="/collection"
            className="inline-block border border-zenji-border text-white font-mono text-xs uppercase px-8 py-4 tracking-widest hover:border-white transition-colors"
          >
            BACK TO COLLECTION →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zenji-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden bg-zenji-dark border border-zenji-border">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {product.onSale && (
                <div className="absolute top-0 right-0 bg-zenji-red text-white text-[10px] font-mono uppercase px-3 py-1">
                  SALE
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="relative aspect-square overflow-hidden bg-zenji-dark border border-zenji-border">
                <Image
                  src={product.images[1]}
                  alt={`${product.name} back`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-zenji-red text-xs tracking-[0.3em] uppercase">
                {product.collection}
              </p>
              <h1 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wider">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                {product.onSale && product.salePrice !== null ? (
                  <>
                    <span className="text-zenji-gray line-through text-lg font-mono">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-zenji-red font-bold text-2xl font-mono">
                      ${product.salePrice.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-white font-bold text-2xl font-mono">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <p className="text-zenji-gray text-sm leading-relaxed font-mono max-w-lg">
              {product.description}
            </p>

            <ProductDetailClient product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
