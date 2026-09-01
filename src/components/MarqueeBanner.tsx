export default function MarqueeBanner() {
  const text =
    "NEW DROP: BLUE FLAME TEE NOW AVAILABLE • LIMITED STOCK • THE_ORIGIN_DROP COLLECTION LIVE • FREE SHIPPING AUSTRALIA-WIDE ON ORDERS OVER A$150 •";

  return (
    <div className="bg-zenji-red w-full overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap py-2">
        <span className="font-mono text-xs uppercase text-white tracking-wider mx-4">
          {text}
        </span>
        <span className="font-mono text-xs uppercase text-white tracking-wider mx-4">
          {text}
        </span>
        <span className="font-mono text-xs uppercase text-white tracking-wider mx-4">
          {text}
        </span>
        <span className="font-mono text-xs uppercase text-white tracking-wider mx-4">
          {text}
        </span>
      </div>
    </div>
  );
}
