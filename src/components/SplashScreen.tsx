"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("zenji-splash-seen");
    if (!seen) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => dismiss(), 3000);
    return () => clearTimeout(timer);
  }, [visible]);

  function dismiss() {
    setVisible(false);
    localStorage.setItem("zenji-splash-seen", "1");
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-zenji-black flex flex-col items-center justify-center cursor-pointer"
          onClick={dismiss}
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white text-[10rem] md:text-[16rem] leading-none font-bold select-none"
          >
            力
          </motion.span>
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl text-white tracking-[0.3em] mt-4"
          >
            ZENJI
          </motion.span>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 left-8 text-left"
          >
            <span className="text-white/60 font-mono text-xs tracking-widest">
              力 — AWAKENING
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 right-8 text-right"
          >
            <span className="text-white/60 font-mono text-xs tracking-widest">
              SYSTEM // ZENJI
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
