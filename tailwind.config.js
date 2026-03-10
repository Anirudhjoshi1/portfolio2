/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00d4ff',
          purple: '#a855f7',
          pink: '#ec4899',
          green: '#22d3ee',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #00d4ff, #a855f7, #ec4899)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glitch': 'glitch 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'energy-beam': 'energy-beam 3s linear infinite',
        'glow-rotate': 'glow-rotate 4s linear infinite',
        'underline-slide': 'underline-slide 0.6s ease forwards',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 212, 255, 0.3), 0 0 30px rgba(168, 85, 247, 0.2)',
        'neon-strong': '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(168, 85, 247, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
