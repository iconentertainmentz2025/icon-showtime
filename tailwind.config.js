/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
        'brand': ['Conquera', 'Arial Black', 'sans-serif'],
        'icon': ['Conquera', 'Arial Black', 'sans-serif'],
      },
      colors: {
        background: {
          main: '#0a0e1a', // Near black
          lighter: '#1a1f2e', // Deep charcoal
          card: 'rgba(26, 31, 46, 0.6)', // Glassmorphism base
        },
        brand: {
          orange: '#FF8C42', // ICON Signature Orange
          gold: '#D4AF37', // Cultural accent (Gold/Bronze)
        },
        text: {
          primary: '#FFFFFF', // Pure White
          secondary: '#F5F5F5', // Off-White
          muted: '#9CA3AF', // Soft gray
        }
      },
      backgroundImage: {
        'cinematic-gradient': 'linear-gradient(180deg, rgba(10,14,26,0.8) 0%, #0a0e1a 100%)',
        'mesh-gradient': 'radial-gradient(circle at 50% 50%, #1a1f2e 0%, #0a0e1a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}

