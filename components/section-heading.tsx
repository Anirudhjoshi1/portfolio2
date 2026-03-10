"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      className="text-3xl font-bold capitalize mb-8 text-center relative inline-block w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative">
        {children}
        {/* Animated gradient underline */}
        <motion.span
          className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full"
          style={{
            background: "linear-gradient(90deg, #00d4ff, #a855f7, #ec4899)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        />
      </span>
    </motion.h2>
  );
}
