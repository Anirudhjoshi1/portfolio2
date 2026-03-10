"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
    { text: "> Initializing AI agent...", delay: 0 },
    { text: "> Loading neural networks: React, Three.js, LangChain", delay: 1200 },
    { text: "> Connecting to knowledge base... ✓", delay: 2800 },
    { text: "> Skills synced: Full-Stack × AI × Cloud", delay: 4200 },
    { text: "> Status: Ready to build the future.", delay: 5600 },
];

function TypewriterLine({ text, onComplete }: { text: string; onComplete?: () => void }) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayed(text.slice(0, i + 1));
                i++;
            } else {
                setDone(true);
                clearInterval(interval);
                onComplete?.();
            }
        }, 30);
        return () => clearInterval(interval);
    }, [text, onComplete]);

    return (
        <span>
            {displayed}
            {!done && <span className="cursor-blink text-blue-600 dark:text-neon-blue ml-0.5">▌</span>}
        </span>
    );
}

export default function AiTerminal() {
    const [visibleLines, setVisibleLines] = useState(0);
    const [linesDone, setLinesDone] = useState<boolean[]>([]);

    useEffect(() => {
        // Show lines one by one with delays
        terminalLines.forEach((line, index) => {
            setTimeout(() => {
                setVisibleLines((prev) => Math.max(prev, index + 1));
            }, line.delay);
        });
    }, []);

    const handleLineComplete = useCallback((index: number) => {
        setLinesDone((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
        });
    }, []);

    return (
        <motion.div
            className="glass-card px-5 py-4 mt-6 max-w-[32rem] mx-auto text-left font-mono text-sm shadow-sm dark:shadow-neon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
        >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs text-gray-500 ml-2">ai-agent.exe</span>
            </div>

            {/* Terminal Lines */}
            <div className="space-y-1.5">
                <AnimatePresence>
                    {terminalLines.slice(0, visibleLines).map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`${line.text.includes("✓") || line.text.includes("Ready")
                                ? "text-green-600 dark:text-green-400"
                                : "text-blue-600 dark:text-neon-blue/80"
                                } ${!linesDone[index] ? "" : "text-gray-500 dark:text-gray-400"}`}
                        >
                            {!linesDone[index] ? (
                                <TypewriterLine
                                    text={line.text}
                                    onComplete={() => handleLineComplete(index)}
                                />
                            ) : (
                                <span>{line.text}</span>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
