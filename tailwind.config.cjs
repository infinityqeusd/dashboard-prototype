/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#dcedff",
          200: "#b4dbff",
          300: "#7ec0ff",
          400: "#4298ff",
          500: "#1f7dff",
          600: "#135fe0",
          700: "#104cb5",
          800: "#123f93",
          900: "#163976"
        }
      },
      boxShadow: {
        panel:
          "0 8px 24px rgba(15, 23, 42, 0.06), 0 2px 8px rgba(15, 23, 42, 0.04)",
        "panel-dark":
          "0 18px 40px rgba(2, 6, 23, 0.45), 0 0 0 1px rgba(148, 163, 184, 0.08)"
      },
      animation: {
        ticker: "ticker-slide 36s linear infinite",
        "fade-in-up": "fade-in-up 500ms ease-out both",
        "gentle-pulse": "gentle-pulse 2.6s ease-in-out infinite"
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        "gentle-pulse": {
          "0%, 100%": { opacity: 0.9 },
          "50%": { opacity: 0.55 }
        }
      }
    }
  },
  plugins: []
};
