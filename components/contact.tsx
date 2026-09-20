"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsLinkedin, BsMailbox, BsFileEarmarkPdf } from "react-icons/bs";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,44rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Let's Connect</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 text-base sm:text-lg">
        I'm currently open to <span className="font-semibold text-gray-900 dark:text-white">Software Engineering</span> and{" "}
        <span className="font-semibold text-cyan-600 dark:text-cyan-400">Frontend Development</span> opportunities.
      </p>

      {/* Quick Connect & Resume Box */}
      <motion.div
        className="glass-card p-6 sm:p-7 mt-8 neon-glow text-left flex flex-col sm:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="space-y-3 w-full sm:w-auto">
          <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
            <FaEnvelope className="text-cyan-600 dark:text-cyan-400" size={16} />
            <span>Email:</span>
            <a
              href="mailto:anirudh.53.aj@gmail.com"
              className="font-semibold gradient-text hover:underline"
            >
              anirudh.53.aj@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
            <BsLinkedin className="text-blue-600 dark:text-blue-400" size={16} />
            <span>LinkedIn:</span>
            <a
              href="https://linkedin.com/in/anirudhjoshi1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            >
              linkedin.com/in/anirudhjoshi1
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
            <FaGithub className="text-gray-900 dark:text-white" size={16} />
            <span>GitHub:</span>
            <a
              href="https://github.com/Anirudhjoshi1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            >
              github.com/Anirudhjoshi1
            </a>
          </div>
        </div>

        <div className="w-full sm:w-auto shrink-0 flex flex-col items-stretch">
          <a
            href="/CV.pdf"
            download="Anirudh_Joshi_Resume.pdf"
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-neon hover:scale-105 active:scale-100 transition-all text-sm"
          >
            Download Resume <HiDownload size={18} className="group-hover:translate-y-0.5 transition" />
          </a>
        </div>
      </motion.div>

      {/* Direct Message Form */}
      <motion.div
        className="glass-card p-8 mt-8 neon-glow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-left font-medium">
          Or send me a direct message:
        </p>

        <form
          ref={formRef}
          className="flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
            formRef.current?.reset();
          }}
        >
          <input
            className="h-14 px-4 rounded-xl 
            bg-white/80 dark:bg-white/5 dark:text-white 
            border border-gray-200 dark:border-white/10
            focus:outline-none focus:ring-2 focus:ring-neon-blue/40 dark:focus:ring-neon-blue/30
            focus:border-neon-blue/50
            transition-all duration-300
            placeholder-gray-500 dark:placeholder-gray-400
            hover:shadow-[0_0_10px_rgba(0,212,255,0.1)]"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email address"
          />

          <textarea
            className="h-44 my-3 rounded-xl p-4 
            bg-white/80 dark:bg-white/5 dark:text-white 
            border border-gray-200 dark:border-white/10
            focus:outline-none focus:ring-2 focus:ring-neon-blue/40 dark:focus:ring-neon-blue/30
            focus:border-neon-blue/50
            transition-all duration-300
            placeholder-gray-500 dark:placeholder-gray-400
            hover:shadow-[0_0_10px_rgba(0,212,255,0.1)]"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />

          <SubmitBtn />
        </form>
      </motion.div>
    </motion.section>
  );
}