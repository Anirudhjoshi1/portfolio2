import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
        bg-gradient-to-r from-gray-900 to-gray-800 dark:from-neon-blue/20 dark:to-neon-purple/20
        text-white rounded-full outline-none 
        transition-all duration-300
        focus:scale-110 hover:scale-110 active:scale-105 
        hover:shadow-neon-strong
        dark:border dark:border-neon-blue/30
        disabled:scale-100 disabled:opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
