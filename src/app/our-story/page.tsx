import Link from "next/link";

const ABOUT_ITEMS = [
  { label: "WHAT ZENJI IS", value: "ZENJI is an Australian anime streetwear brand." },
  { label: "FOUNDED", value: "ZENJI was founded in 2024." },
  { label: "WHAT WE MAKE", value: "ZENJI makes limited-edition anime-inspired graphic tees in 100% heavyweight 240gsm cotton." },
  { label: "SHIPPING", value: "ZENJI ships Australia-wide, with free shipping on orders over A$100 and standard delivery in 5-10 business days." },
  { label: "RESTOCKS", value: "ZENJI products are limited edition. There are no restocks, ever — once a piece sells out it is gone for good." },
  { label: "PRICING", value: "ZENJI tees are A$39.99, with selected pieces on sale at A$33.99." },
  { label: "INFLUENCES", value: "ZENJI draws on samurai discipline, Japanese iconography and modern anime art." },
  { label: "BASED IN", value: "ZENJI is based in Australia and ships to every Australian state and territory." },
  { label: "ANIME INSPIRATION", value: "ZENJI designs are inspired by series including Jujutsu Kaisen, Demon Slayer, Naruto, One Piece and Dragon Ball." },
  { label: "NEXT DROP", value: "The Origin Drop is in stock and shipping now, with selected pieces on sale at 15% off." },
];

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-zenji-black">
      {/* Hero */}
      <section className="px-6 md:px-12 pt-32 pb-20 border-b border-zenji-border">
        <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4">
          ABOUT // ZENJI
        </p>
        <h1 className="font-display text-4xl md:text-6xl uppercase text-white leading-tight max-w-4xl">
          ANIME STREETWEAR AUSTRALIA — BORN FROM THE WARRIOR SPIRIT.
        </h1>
      </section>

      {/* Brand Story */}
      <section className="px-6 md:px-12 py-20 border-b border-zenji-border">
        <div className="max-w-3xl space-y-8">
          <p className="text-white text-sm font-mono leading-relaxed">
            ZENJI began with one belief: what you wear should tell a story.
          </p>
          <p className="text-white text-sm font-mono leading-relaxed">
            Inspired by samurai discipline, anime art and modern street culture, we create premium streetwear for those who choose their own path.
          </p>
          <p className="text-white text-sm font-mono leading-relaxed">
            Every ZENJI piece combines Japanese-inspired artwork, powerful symbolism and oversized silhouettes to express courage, creativity and individuality.
          </p>

          <blockquote className="border-l-2 border-zenji-red pl-6 py-2">
            <p className="text-white text-sm font-mono italic leading-relaxed">
              The warrior within refuses to fade into the crowd.
            </p>
          </blockquote>

          <p className="text-white text-sm font-mono leading-relaxed">
            We design for the dreamers, fighters, creators and outsiders shaping their own future.
          </p>
        </div>
      </section>

      {/* WEAR YOUR Section */}
      <section className="px-6 md:px-12 py-24 border-b border-zenji-border text-center">
        <h2 className="font-display text-6xl md:text-8xl uppercase text-white mb-6">
          WEAR YOUR
        </h2>
        <p className="text-zenji-gray text-xs font-mono uppercase tracking-widest mb-10">
          FOR THE DREAMERS. FIGHTERS. CREATORS. OUTSIDERS.
        </p>
        <Link
          href="/collection"
          className="inline-block text-zenji-red text-xs font-mono uppercase tracking-widest hover:text-white transition-colors"
        >
          EXPLORE THE COLLECTION →
        </Link>
      </section>

      {/* About ZENJI Section */}
      <section className="px-6 md:px-12 py-24">
        <h2 className="font-display text-3xl uppercase text-white mb-12">
          ABOUT ZENJI
        </h2>
        <div className="max-w-3xl space-y-6">
          {ABOUT_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <span className="text-zenji-red text-xs font-mono uppercase tracking-wider shrink-0 sm:w-48">
                {item.label}:
              </span>
              <span className="text-white text-sm font-mono leading-relaxed">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
