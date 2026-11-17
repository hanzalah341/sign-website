import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "var(--color-midnight, #0E0B1F)",
          dim: "#080612",
        },
        plum: {
          DEFAULT: "var(--color-plum, #1A1535)",
          surface: "var(--color-plum, #1A1535)",
          deep: "#120E26",
          border: "#292152",
          hover: "#221C42",
        },
        champagne: {
          DEFAULT: "var(--color-champagne, #E8C27A)",
          light: "#F3DCAB",
          dark: "#CFA453",
          glow: "rgba(232, 194, 122, 0.35)",
        },
        coral: {
          DEFAULT: "var(--color-coral, #FF4D7D)",
          glow: "rgba(255, 77, 125, 0.35)",
          dark: "#E03362",
        },
        ivory: {
          DEFAULT: "var(--color-ivory, #F5F0E6)",
          muted: "#B8B1A2",
          dim: "#7C766C",
          surface: "#FAF7F2",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Outfit", "Manrope", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(232, 194, 122, 0.45), 0 0 10px -2px rgba(232, 194, 122, 0.3)',
        'glow-gold-lg': '0 0 50px -10px rgba(232, 194, 122, 0.5), 0 0 20px 0px rgba(232, 194, 122, 0.35)',
        'glow-coral': '0 0 30px -5px rgba(255, 77, 125, 0.5), 0 0 12px -2px rgba(255, 77, 125, 0.4)',
        'subtle-plum': '0 12px 30px -8px rgba(10, 8, 24, 0.7)',
      },
      animation: {
        'flicker': 'flicker 2.5s ease-in-out infinite alternate',
        'subtle-pulse': 'subtlePulse 4s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 20px rgba(232,194,122,0.8)) drop-shadow(0 0 45px rgba(232,194,122,0.4))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.45',
            filter: 'none',
          },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
