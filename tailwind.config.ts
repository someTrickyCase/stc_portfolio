import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                white: "var(--white-font)",
                black: "var(--black-font)",
            },
            animation: {
                "spin-left": "spin-left 0.5s linear infinite",
                "spin-slow": "spin 4s linear infinite",
            },
        },
    },

    plugins: [],
} satisfies Config;
