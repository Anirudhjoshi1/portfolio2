"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="my-24 hidden sm:flex items-center justify-center">
      <motion.div
        className="relative h-20 w-[2px] rounded-full overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      >
        {/* Energy beam effect */}
        <motion.div
          className="absolute inset-0 w-full"
          style={{
            background:
              "linear-gradient(180deg, transparent, #00d4ff, #a855f7, transparent)",
            backgroundSize: "100% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "0% 100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Glow */}
        <div
          className="absolute inset-0 w-full blur-sm"
          style={{
            background:
              "linear-gradient(180deg, transparent, #00d4ff, #a855f7, transparent)",
            backgroundSize: "100% 200%",
          }}
        />
      </motion.div>
    </div>
  );
}
