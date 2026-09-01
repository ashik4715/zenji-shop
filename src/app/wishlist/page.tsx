import Link from "next/link";

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-zenji-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4">
          SAVED // THIS DEVICE
        </p>
        <h1 className="font-display text-5xl uppercase tracking-tight mb-4">
          WISHLIST
        </h1>
        <p className="text-sm text-zenji-gray max-w-lg mb-6">
          Saved on this device only. Log in and these move to your account, so
          they follow you everywhere.
        </p>
        <Link
          href="/login"
          className="inline-block text-xs font-mono uppercase text-white underline hover:text-zenji-red transition-colors mb-16"
        >
          LOG IN TO KEEP THEM →
        </Link>

        {/* Empty State */}
        <div className="text-center py-20 border border-zenji-border">
          <h2 className="font-display text-2xl uppercase tracking-tight mb-4">
            NO SAVED PIECES YET
          </h2>
          <p className="text-sm text-zenji-gray mb-8">
            TAP THE HEART ON ANY PIECE TO SAVE IT
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 border border-zenji-border text-white text-xs font-mono uppercase tracking-widest hover:border-white transition-colors"
          >
            BROWSE THE COLLECTION →
          </Link>
        </div>
      </div>
    </div>
  );
}
