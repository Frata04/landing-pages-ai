/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        border: "var(--dt-border)",
        input: "var(--dt-border)",
        ring: "var(--dt-primary)",
        background: "var(--dt-background)",
        foreground: "var(--dt-text)",
        primary: {
          DEFAULT: "var(--dt-primary)",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "var(--dt-surface)",
          foreground: "var(--dt-text)",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "var(--dt-surface)",
          foreground: "var(--dt-text-muted)",
        },
        accent: {
          DEFAULT: "var(--dt-surface)",
          foreground: "var(--dt-text)",
        },
        popover: {
          DEFAULT: "var(--dt-surface)",
          foreground: "var(--dt-text)",
        },
        card: {
          DEFAULT: "var(--dt-surface)",
          foreground: "var(--dt-text)",
        },
        surface: "var(--dt-surface)",
      },
      fontFamily: {
        sans: ['var(--dt-font-body)', 'system-ui', 'sans-serif'],
        heading: ['var(--dt-font-heading)', 'system-ui', 'sans-serif'],
        mono: ['var(--dt-font-mono)', 'monospace'],
      },
      borderRadius: {
        lg: "var(--dt-radius-lg)",
        md: "var(--dt-radius)",
        sm: "calc(var(--dt-radius) - 2px)",
      },
      boxShadow: {
        'glow': 'var(--dt-glow)',
        'card': 'var(--dt-shadow)',
        'card-hover': 'var(--dt-shadow-hover)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
