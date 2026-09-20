"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
    { text: "> Initializing Software Engineer profile...", delay: 0 },
    { text: "> Loading core frontend stack: React.js, JavaScript, TypeScript, Tailwind CSS", delay: 1100 },
    { text: "> Verified production experience: 2+ Years at InstaDataHelp... ✓", delay: 2600 },
    { text: "> Domains: Logistics × Fleet Telematics × Construction × Energy", delay: 4000 },
    { text: "> Status: Ready to build production-ready web applications.", delay: 5400 },
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
        }, 25);
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
            className="glass-card px-5 py-4 mt-8 max-w-[36rem] mx-auto text-left font-mono text-xs sm:text-sm shadow-sm dark:shadow-neon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
        >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">anirudh-sde.sh</span>
            </div>

            {/* Terminal Lines */}
            <div className="space-y-1.5 leading-relaxed">
                <AnimatePresence>
                    {terminalLines.slice(0, visibleLines).map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`${line.text.includes("✓") || line.text.includes("Ready")
                                ? "text-green-600 dark:text-green-400 font-semibold"
                                : "text-blue-600 dark:text-neon-blue/90"
                                } ${!linesDone[index] ? "" : "text-gray-600 dark:text-gray-300"}`}
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
