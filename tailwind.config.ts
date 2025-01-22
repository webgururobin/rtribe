import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        general: ["var(--font-general-sans)"],
        nippo: ["var(--font-nippo)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#F05A29",
      },
    },
  },
  plugins: [],
} satisfies Config;
