"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fighters = [
  "JUJUTSU KAISEN",
  "DEMON SLAYER",
  "ONE PIECE",
  "NARUTO",
  "DRAGON BALL",
  "OTHER",
];

export default function PopupModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const splashSeen = localStorage.getItem("zenji-splash-seen");
    const popupSeen = localStorage.getItem("zenji-popup-seen");
    if (splashSeen && !popupSeen) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    setVisible(false);
    localStorage.setItem("zenji-popup-seen", "1");
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            key="popup-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-zenji-dark border border-zenji-border w-full max-w-md mx-4 p-8 space-y-6"
          >
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-4 right-4 text-zenji-gray hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="text-center space-y-2">
              <div className="font-display text-2xl text-white tracking-[0.2em]">ZENJI</div>
              <h2 className="font-display text-xl uppercase text-white tracking-wider">
                FREE SHIPPING ON FIRST ORDER
              </h2>
              <p className="text-xs font-mono uppercase text-zenji-gray tracking-widest">
                CHOOSE YOUR FIGHTER
              </p>
            </div>

            <div className="space-y-2">
              {fighters.map((fighter) => (
                <button
                  key={fighter}
                  onClick={dismiss}
                  className="w-full py-3 px-4 border border-zenji-border text-sm font-mono uppercase text-white bg-transparent hover:border-zenji-red hover:text-zenji-red transition-colors text-left"
                >
                  {fighter}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
