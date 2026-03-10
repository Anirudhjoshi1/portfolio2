"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { BsChatDotsFill, BsX, BsArrowUpCircle, BsMoonStars, BsSun, BsClipboardCheck, BsWhatsapp, BsFileEarmarkPdf } from "react-icons/bs";
import toast from "react-hot-toast";

const GREETINGS = [
    "Hi! I'm AniBot. Look around!",
    "Scroll down to see the projects!",
    "Hover over the skill cards!",
    "Need to contact Anirudh?",
];

const SECTION_COMMENTS: Record<string, string> = {
    Home: "Welcome to the digital realm! 🚀",
    About: "Learning about the creator, huh? 🧠",
    Projects: "Check out these cool builds! 💻",
    Skills: "Neon skills initialized! ⚡",
    Experience: "A timeline of growth! 📈",
    Contact: "Send a message, don't be shy! ✉️",
};

export default function AiCompanion() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(GREETINGS[0]);
    const [isHovered, setIsHovered] = useState(false);
    const [isManualOpen, setIsManualOpen] = useState(false);
    const { activeSection, setTimeOfLastClick, setActiveSection } = useActiveSectionContext();
    const { theme, toggleTheme } = useTheme();
    const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const companionRef = useRef<HTMLDivElement>(null);

    // Close chat if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                companionRef.current &&
                !companionRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setIsManualOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Update message based on section
    useEffect(() => {
        if (activeSection && SECTION_COMMENTS[activeSection] && !isManualOpen) {
            setIsOpen(true);
            setMessage(SECTION_COMMENTS[activeSection]);

            // Auto-close after 4 seconds if not manually opened
            if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
            messageTimeoutRef.current = setTimeout(() => {
                setIsOpen(false);
            }, 4000);
        }

        return () => {
            if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
        };
    }, [activeSection, isManualOpen]);

    // Occasional random greetings if idle
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isOpen && !isManualOpen && Math.random() > 0.7) {
                const randomGreeting = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
                setMessage(randomGreeting);
                setIsOpen(true);

                if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
                messageTimeoutRef.current = setTimeout(() => {
                    setIsOpen(false);
                }, 4000);
            }
        }, 15000); // Check every 15s

        return () => clearInterval(interval);
    }, [isOpen, isManualOpen]);

    const toggleChat = () => {
        if (!isManualOpen) {
            setIsOpen(true);
            setIsManualOpen(true);
            setMessage("How can I help you?");
            if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
        } else {
            setIsOpen(false);
            setIsManualOpen(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("Home");
        setTimeOfLastClick(Date.now());
        setMessage("Zooming to the top! 🚀");
    };

    const copyEmail = () => {
        navigator.clipboard.writeText("anirudh.53.aj@gmail.com"); // Replace with actual email
        toast.success("Email copied to clipboard!");
        setMessage("Email copied! ✉️");
    };

    const openWhatsApp = () => {
        // Replace with your actual phone number, including country code (e.g., 91 for India)
        window.open("https://wa.me/918302324706", "_blank");
        setMessage("Opening WhatsApp! 💬");
    };

    return (
        <div ref={companionRef} className="fixed bottom-6 left-6 z-[999] flex flex-col items-start pointer-events-none">

            {/* Chat Bubble */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10, x: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10, x: -10 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="pointer-events-auto mb-4 ml-4 relative glass-card p-3 rounded-2xl rounded-bl-sm w-[220px] shadow-neon z-50 flex flex-col gap-3"
                    >
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-100 font-mono">
                            {message}
                        </p>

                        {/* Quick Actions (Only show when manually opened) */}
                        <AnimatePresence>
                            {isManualOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex flex-col gap-2 border-t border-gray-200 dark:border-white/10 pt-2"
                                >
                                    <button onClick={scrollToTop} className="flex items-center gap-2 text-xs hover:bg-gray-100 dark:hover:bg-white/10 p-1.5 rounded-lg transition-colors text-gray-600 dark:text-gray-300">
                                        <BsArrowUpCircle className="text-[#00d4ff]" /> Go to Top
                                    </button>
                                    <button onClick={toggleTheme} className="flex items-center gap-2 text-xs hover:bg-gray-100 dark:hover:bg-white/10 p-1.5 rounded-lg transition-colors text-gray-600 dark:text-gray-300">
                                        {theme === "light" ? <BsMoonStars className="text-[#a855f7]" /> : <BsSun className="text-yellow-400" />}
                                        Toggle Theme
                                    </button>
                                    <button onClick={copyEmail} className="flex items-center gap-2 text-xs hover:bg-gray-100 dark:hover:bg-white/10 p-1.5 rounded-lg transition-colors text-gray-600 dark:text-gray-300">
                                        <BsClipboardCheck className="text-pink-500" /> Copy Email
                                    </button>
                                    <button onClick={openWhatsApp} className="flex items-center gap-2 text-xs hover:bg-gray-100 dark:hover:bg-white/10 p-1.5 rounded-lg transition-colors text-gray-600 dark:text-gray-300">
                                        <BsWhatsapp className="text-green-500" /> WhatsApp
                                    </button>
                                    <a
                                        href="/CV.pdf"
                                        download="Anirudh_Joshi_CV.pdf"
                                        onClick={() => toast.success("Downloading CV! 📄")}
                                        className="flex items-center gap-2 text-xs hover:bg-gray-100 dark:hover:bg-white/10 p-1.5 rounded-lg transition-colors text-gray-600 dark:text-gray-300"
                                    >
                                        <BsFileEarmarkPdf className="text-red-500" /> Download CV
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Close button for message */}
                        <button
                            onClick={() => { setIsOpen(false); setIsManualOpen(false); }}
                            className="absolute -top-2 -right-2 bg-gray-200 dark:bg-gray-800 rounded-full p-0.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                        >
                            <BsX size={14} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Companion / Robot Avatar */}
            <motion.button
                className="pointer-events-auto relative flex flex-col items-center justify-center cursor-pointer outline-none group mt-2"
                onClick={toggleChat}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    y: [0, -10, 0], // Floating up and down
                }}
                transition={{
                    y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }
                }}
            >
                {/* Antenna */}
                <div className="flex flex-col items-center -mb-1 transform translate-y-1">
                    <motion.div
                        className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="w-[2px] h-3 bg-gray-400 dark:bg-gray-500" />
                </div>

                {/* Robot Body */}
                <div className="relative w-[4.5rem] h-16 bg-white dark:bg-gray-800 rounded-[2rem] shadow-glass dark:shadow-neon flex items-center justify-center border border-gray-200 dark:border-white/10 z-10 overflow-hidden">

                    {/* Inner Face Screen */}
                    <div className="w-[85%] h-[75%] bg-gray-950 rounded-[1.2rem] flex items-center justify-center relative overflow-hidden shadow-inner">

                        {/* Glossy reflection on screen */}
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none" />

                        {isHovered ? (
                            <BsChatDotsFill size={20} className="text-[#00d4ff] animate-pulse z-10" />
                        ) : (
                            <div className="flex items-center justify-center gap-3 relative z-10 w-full px-2">

                                {/* Left Eye */}
                                <div className="relative flex justify-center">
                                    {/* Blush */}
                                    <motion.div
                                        className="absolute -bottom-2.5 -left-1.5 w-4 h-2 bg-pink-500/80 rounded-full blur-[2px]"
                                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="w-2.5 h-3.5 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]"
                                        animate={{
                                            scaleY: [1, 0.1, 1, 1, 1],
                                            x: [0, 2, 0, -2, 0] // Eyes shifting side to side
                                        }}
                                        transition={{
                                            scaleY: { duration: 4, repeat: Infinity, times: [0, 0.05, 0.1, 0.5, 1] },
                                            x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    />
                                </div>

                                {/* Right Eye */}
                                <div className="relative flex justify-center">
                                    {/* Blush */}
                                    <motion.div
                                        className="absolute -bottom-2.5 -right-1.5 w-4 h-2 bg-pink-500/80 rounded-full blur-[2px]"
                                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="w-2.5 h-3.5 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]"
                                        animate={{
                                            scaleY: [1, 0.1, 1, 1, 1],
                                            x: [0, 2, 0, -2, 0] // Synchronized shift
                                        }}
                                        transition={{
                                            scaleY: { duration: 4, repeat: Infinity, times: [0, 0.05, 0.1, 0.5, 1] },
                                            x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                    />
                                </div>

                            </div>
                        )}
                    </div>
                </div>

                {/* Left Floating Hand */}
                <motion.div
                    className="absolute top-1/2 -left-3 w-3 h-4 bg-white dark:bg-gray-300 rounded-full shadow-md z-20 border border-gray-200"
                    animate={{
                        y: [0, -3, 0],
                        rotate: isHovered ? [0, -20, 20, -20, 0] : 15
                    }}
                    transition={{
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 0.5, repeat: isHovered ? Infinity : 0 }
                    }}
                />

                {/* Right Floating Hand */}
                <motion.div
                    className="absolute top-1/2 -right-3 w-3 h-4 bg-white dark:bg-gray-300 rounded-full shadow-md z-20 border border-gray-200"
                    animate={{
                        y: [0, -4, 0],
                        rotate: isHovered ? [0, 20, -20, 20, 0] : -15
                    }}
                    transition={{
                        y: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                        rotate: { duration: 0.5, repeat: isHovered ? Infinity : 0 }
                    }}
                />

                {/* Hover ring */}
                <motion.div
                    className="absolute -inset-4 rounded-full border border-dashed border-[#a855f7]/30 pointer-events-none"
                    animate={{ rotate: 360, scale: isHovered ? 1.1 : 1, opacity: isHovered ? 1 : 0 }}
                    transition={{
                        rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                        scale: { duration: 0.3 },
                        opacity: { duration: 0.3 }
                    }}
                />
            </motion.button>

        </div>
    );
}
