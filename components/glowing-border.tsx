"use client";

import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

type GlowingBorderProps = {
    children: ReactNode;
    className?: string;
    glowColor?: string;
};

export default function GlowingBorder({
    children,
    className = "",
    glowColor = "from-neon-blue via-neon-purple to-neon-pink"
}: GlowingBorderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={containerRef}
            className={`relative rounded-2xl overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated gradient border */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${glowColor} rounded-2xl opacity-0`}
                animate={{ opacity: isHovered ? 0.8 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ padding: "2px" }}
            />

            {/* Spotlight effect */}
            <motion.div
                className="absolute inset-0 opacity-0 pointer-events-none z-10"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.08), transparent 60%)`,
                }}
            />

            {/* Content container */}
            <div className="relative z-20 m-[2px] rounded-[calc(1rem-2px)] bg-white dark:bg-gray-900 overflow-hidden">
                {children}
            </div>
        </motion.div>
    );
}
