/**
 * tailwind.config.cjs
 * ضبط Tailwind مع مسارات المحتوى والإضافات الأساسية.
 */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(214, 10%, 85%)",
        background: "#ffffff",
        foreground: "#0f172a",
        primary: {
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#475569",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
