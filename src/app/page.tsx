import Link from "next/link";
import Image from "next/image";
import SplashScreen from "@/components/SplashScreen";
import PopupModal from "@/components/PopupModal";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import type { Product } from "@/lib/types";

const allProducts = products as Product[];
const saleProducts = allProducts.filter((p) => p.onSale);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zenji-black">
      <SplashScreen />
      <PopupModal />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zenji-black via-zenji-black/60 to-zenji-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zenji-red/10 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4 space-y-8">
          <p className="font-mono text-zenji-red text-xs tracking-[0.3em] uppercase">
            力 THE_ORIGIN_DROP // LOADING
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-wider">
            WEAR YOUR STORY
          </h1>
          <Link
            href="/drop"
            className="inline-block bg-zenji-red text-white font-mono text-sm uppercase px-8 py-4 tracking-widest hover:bg-zenji-red/80 transition-colors"
          >
            SHOP THE DROP →
          </Link>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-20 px-4 md:px-8 space-y-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="font-mono text-zenji-red text-xs tracking-[0.3em] uppercase">
            COLLECTION // THE_ORIGIN_DROP
          </p>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-5xl text-white uppercase">SALE</h2>
            <Link
              href="/collection"
              className="border border-zenji-border text-white font-mono text-xs uppercase px-6 py-3 tracking-widest hover:border-white transition-colors"
            >
              VIEW_ALL
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto space-y-4">
          {saleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/drop/${product.id}`}
              className="group relative block w-full h-[60vh] md:h-[80vh] overflow-hidden"
            >
              <Image
                src={product.heroImage}
                alt={product.name}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zenji-black via-zenji-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                <p className="font-mono text-zenji-red text-xs tracking-[0.3em] uppercase">
                  {product.collection}
                </p>
                <h3 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wider">
                  {product.name}
                </h3>
                <span className="inline-block font-mono text-xs text-white tracking-widest uppercase group-hover:text-zenji-red transition-colors">
                  SHOP {product.name} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Drops Section */}
      <section className="py-20 px-4 md:px-8 space-y-12 bg-zenji-dark/50">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="font-mono text-zenji-red text-xs tracking-[0.3em] uppercase">
            COLLECTION // THE_ORIGIN_DROP
          </p>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-5xl text-white uppercase">
              LATEST_DROPS
            </h2>
            <Link
              href="/collection"
              className="border border-zenji-border text-white font-mono text-xs uppercase px-6 py-3 tracking-widest hover:border-white transition-colors"
            >
              VIEW_ALL
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {allProducts.map((product) => (
              <div key={product.id} className="w-80 shrink-0">
                <ProductCard product={product} variant="horizontal" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative py-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zenji-black via-zenji-dark/30 to-zenji-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_var(--tw-gradient-stops))] from-zenji-red/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-8">
          <p className="font-mono text-zenji-red text-xs tracking-[0.3em] uppercase">
            MANIFESTO_001
          </p>
          <h2 className="font-display text-6xl md:text-8xl uppercase tracking-wider leading-none">
            THE <span className="text-zenji-red">ZENJI</span> ETHOS
          </h2>
          <p className="max-w-2xl text-zenji-gray text-sm leading-relaxed font-mono">
            We exist at the intersection of technical precision and cultural
            expression. Our garments are engineered for those navigating an
            increasingly fragmented world, built from Japanese craftsmanship,
            anime culture and modern Australian streetwear.
          </p>
        </div>
      </section>
    </main>
  );
}
