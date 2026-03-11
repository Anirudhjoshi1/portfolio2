"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY || "missing-api-key");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  // Check if API key is effectively missing
  if (process.env.RESEND_API_KEY === undefined || process.env.RESEND_API_KEY === "") {
    return { error: "Server is missing Resend configuration (RESEND_API_KEY is not set)" };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "anirudh.53.aj@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      text: `Message from: ${senderEmail}\n\n${message}`,
    });

    // In varying versions of Resend, the returned 'data' could be a complex object.
    // Return only serializable data like a simple string ID (or boolean) back to the client.
    return {
      data: data ? true : false,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};