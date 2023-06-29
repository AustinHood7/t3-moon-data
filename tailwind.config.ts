import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'radial-gradient-start': 'rgba(252,211,77,0.64)', // the start color of your radial gradient
        'radial-gradient-end': 'rgba(28,25,23,1)', // the end color of your radial gradient
      },
    },
  },
  plugins: [],
} satisfies Config;
