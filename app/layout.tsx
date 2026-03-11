import Header from "@/components/header";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata = {
  title: "Anirudh | AI-Powered Full-Stack Developer",
  description:
    "Anirudh Joshi — AI-focused full-stack developer specializing in React, Next.js, Three.js, and Generative AI integrations. Building intelligent web solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#0a0a0f] dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Ambient gradient orbs */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#1a0a2e] dark:opacity-40"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0a1628] dark:opacity-40"></div>

        {/* Subtle grid pattern */}
        <div
          className="fixed inset-0 -z-20 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster
              position="top-right"
              toastOptions={{
                className: "!bg-white/80 dark:!bg-[#0a0a0f]/80 !backdrop-blur-md !border !border-gray-200 dark:!border-white/10 !text-gray-950 dark:!text-white !shadow-[0_0_15px_rgba(0,212,255,0.15)]",
                success: {
                  iconTheme: {
                    primary: '#00d4ff',
                    secondary: '#fff',
                  },
                },
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
