"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="font-bold gradient-text hover:opacity-80 transition"
          href="mailto:anirudh.53.aj@gmail.com"
        >
          anirudh.53.aj@gmail.com
        </a>{" "}
        or through this form.
      </p>

      {/* Glassmorphism form container */}
      <motion.div
        className="glass-card p-8 mt-10 neon-glow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
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
            placeholder="Your email"
          />

          <textarea
            className="h-52 my-3 rounded-xl p-4 
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