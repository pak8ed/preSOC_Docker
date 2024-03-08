import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        mainFocus: "#ECF6FF",
        accent: "#034B97",
        body: "#F6F7FA",
        inactive: "#C2C2C2",
        good: "#039773",
        qualite: "#E1FFEF",
        alert: "#970C03",
        sympa: "#695EB0",
      },
      boxShadow: {
        nav: "14px 17px 40px 4px rgba(112, 144, 176, 0.12)",
        bar: "4px 4px 20px 0px rgba(0, 0, 0, 0.11)",
        tableHeader: "1px 6px 5px 1px rgba(112, 144, 176, 0.2)",
        tableFooter: "1px -6px 5px 1px rgba(112, 144, 176, 0.2)",
        innerBorderBottom:
          "0px -15px 10px -10px inset rgba(112, 144, 176, 0.5)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        std: "12px",
        qualite: "5px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
