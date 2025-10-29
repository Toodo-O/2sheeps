/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      backgroundImage: {
        'section_bg': "url('/src/assets/images/home/sectionbg.png')",
        'item_bg': "url('/src/assets/images/home/card_bg.png')",
        'home': "url('/src/assets/images/home/bg.png')",
        'bot': "url('/src/assets/images/home/2.png')",
        'hands': "url('/src/assets/images/home/3.png')",
        'home_last': "url('/src/assets/images/home/4.jpg')",
        'story': "url('/src/assets/images/story/1.png')",
        'story_last': "url('/src/assets/images/story/2.png')",
        'product': "url('/src/assets/images/product/bg.png')",
        'product1': "url('/src/assets/images/product/1.png')",
        'product2': "url('/src/assets/images/product/2.png')",
        'service': "url('/src/assets/images/service/bg.png')",
        'service1': "url('/src/assets/images/service/1.png')",
        'service2': "url('/src/assets/images/service/2.png')",
        'service3': "url('/src/assets/images/service/3.png')",
        'service4': "url('/src/assets/images/service/4.png')",
        'service5': "url('/src/assets/images/service/5.png')",
        'service6': "url('/src/assets/images/service/6.png')",
        'service_bg2': "url('/src/assets/images/service/bg2.png')",
        'contact': "url('/src/assets/images/contact/bg.png')",
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // 核心主色
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        kawaii: {
          pink: '#ffb7c5',
          blue: '#89cff0',
          yellow: '#fffaa0',
          green: '#a0e7a0',
          purple: '#d8aef2',
        },
        gray: {
          750: '#2d3748',
        }
      },
      fontFamily: {
        Red: ['Red Hat Display', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 