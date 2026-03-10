"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
    const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        setIsVisible(true);
    }, [cursorX, cursorY]);

    const handleMouseLeave = useCallback(() => {
        setIsVisible(false);
    }, []);

    useEffect(() => {
        // Only show on desktop
        if (window.innerWidth < 768) return;

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        // Detect hovering on interactive elements
        const handleOver = () => setIsHovering(true);
        const handleOut = () => setIsHovering(false);

        const interactiveElements = document.querySelectorAll(
            "a, button, input, textarea, [role='button']"
        );
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleOver);
            el.addEventListener("mouseleave", handleOut);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleOver);
                el.removeEventListener("mouseleave", handleOut);
            });
        };
    }, [handleMouseMove, handleMouseLeave]);

    // Don't render on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovering ? 60 : 32,
                    height: isHovering ? 60 : 32,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <div
                    className="w-full h-full rounded-full border-2 border-neon-blue/50"
                    style={{
                        boxShadow: isHovering
                            ? "0 0 20px rgba(0, 212, 255, 0.4), inset 0 0 20px rgba(0, 212, 255, 0.1)"
                            : "0 0 10px rgba(0, 212, 255, 0.2)",
                    }}
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovering ? 8 : 4,
                    height: isHovering ? 8 : 4,
                    opacity: isVisible ? 1 : 0,
                }}
            >
                <div className="w-full h-full rounded-full bg-neon-blue" />
            </motion.div>
        </>
    );
}
