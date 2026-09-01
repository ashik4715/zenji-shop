"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[100]"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-zenji-black border-l border-zenji-border z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zenji-border">
              <h2 className="font-display text-lg uppercase tracking-wider text-white">
                YOUR CART ({totalItems})
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <p className="font-display text-2xl uppercase text-white tracking-wider">
                    YOUR CART IS EMPTY
                  </p>
                  <p className="font-mono text-sm text-zenji-gray">
                    THE ARC AWAITS.
                  </p>
                  <Link
                    href="/collection"
                    onClick={closeCart}
                    className="inline-block bg-zenji-red text-white font-mono text-xs uppercase px-8 py-4 tracking-widest hover:bg-zenji-red/80 transition-colors"
                  >
                    SHOP COLLECTION →
                  </Link>
                </div>
              ) : (
                items.map((item) => {
                  const displayPrice =
                    item.product.onSale && item.product.salePrice !== null
                      ? item.product.salePrice
                      : item.product.price;
                  return (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="flex gap-4 bg-zenji-dark border border-zenji-border p-3 rounded-sm"
                    >
                      <div className="relative w-20 h-24 shrink-0 overflow-hidden bg-zenji-black rounded-sm">
                        <Image
                          src={item.product.heroImage || item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <h3 className="font-display text-sm uppercase text-white tracking-wider truncate">
                            {item.product.name}
                          </h3>
                          <p className="text-xs font-mono text-zenji-gray mt-0.5">
                            SIZE: {item.size}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity - 1)
                              }
                              className="w-7 h-7 border border-zenji-border text-white text-xs flex items-center justify-center hover:border-white transition-colors"
                            >
                              −
                            </button>
                            <span className="text-sm font-mono text-white w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity + 1)
                              }
                              className="w-7 h-7 border border-zenji-border text-white text-xs flex items-center justify-center hover:border-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-sm font-mono text-white">
                            ${(displayPrice * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        aria-label="Remove item"
                        className="text-zenji-gray hover:text-zenji-red transition-colors self-start mt-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-zenji-border px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-zenji-gray">
                    SUBTOTAL
                  </span>
                  <span className="font-display text-xl text-white">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-[10px] font-mono text-zenji-gray">
                  SHIPPING CALCULATED AT CHECKOUT
                </p>
                <button className="w-full bg-zenji-red text-white py-4 text-xs font-mono uppercase tracking-widest hover:bg-zenji-red/80 transition-colors">
                  CHECKOUT →
                </button>
                <button
                  onClick={closeCart}
                  className="w-full border border-zenji-border text-white py-4 text-xs font-mono uppercase tracking-widest hover:border-white transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
