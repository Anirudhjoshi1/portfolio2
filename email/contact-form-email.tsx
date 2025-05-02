import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black font-sans">
          <Container className="mx-auto my-10 p-4 max-w-xl">
            <Section className="bg-white border border-black/10 px-10 py-6 rounded-md shadow-sm">
              <Heading className="text-xl mb-4">
                📬 New Contact Form Submission
              </Heading>

              <Text className="mb-2">
                <strong>Message:</strong>
              </Text>
              <Text className="mb-6 whitespace-pre-line">{message}</Text>

              <Hr className="my-4" />

              <Text>
                <strong>Sender Email:</strong> {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
