"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mb-10 px-4 text-center text-gray-500 overflow-hidden">
      {/* Animated gradient bar */}
      <motion.div
        className="h-[1px] w-full max-w-md mx-auto mb-6 rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, #00d4ff, #a855f7, #ec4899, transparent)",
          backgroundSize: "200% 100%"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <motion.small
        className="block text-xs mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="gradient-text font-medium">Built with ❤️</span>
        {" "}by Anirudh Joshi
      </motion.small>

      <motion.p
        className="text-xs text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        React • Next.js • Three.js • Framer Motion
      </motion.p>
    </footer>
  );
}
