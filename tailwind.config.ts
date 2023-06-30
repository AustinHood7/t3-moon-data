import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeDown: 'fadeDown .5s ease-out',
      },
      colors: {
        'radial-gradient-start': 'rgba(252,211,77,0.64)', // the start color of your radial gradient
        'radial-gradient-end': 'rgba(28,25,23,1)', // the end color of your radial gradient
      },
    },
    variants: {
      extend: {
        animation: ['hover'],
      },
    }
  },
  plugins: [],
} satisfies Config;
