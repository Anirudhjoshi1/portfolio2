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
  // 1. Add a ref to control the form
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
        <a className="underline font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition" href="mailto:anirudh.53.aj@gmail.com">
          anirudh.53.aj@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef} // Attach the ref here
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          // 2. Clear the form inputs on success
          formRef.current?.reset(); 
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack 
          bg-white dark:bg-white/10 dark:text-white 
          focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30 
          transition-all placeholder-gray-500 dark:placeholder-gray-400"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 
          bg-white dark:bg-white/10 dark:text-white 
          focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30 
          transition-all placeholder-gray-500 dark:placeholder-gray-400"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        
        <SubmitBtn />
      </form>
    </motion.section>
  );
}