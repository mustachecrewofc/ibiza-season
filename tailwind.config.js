/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'lovable-dark': '#1B1B1B',
        'lovable-cream': '#F8F4EC',
        'lovable-bg': '#FCFBF8',
        'lovable-muted': '#73726F',
        'lovable-card': '#F7F4ED',
        'lovable-card-outer': '#ECEAE4',
        'lovable-card-border': '#D8D6CF',
        'lovable-blue': '#4E93FF',
        'lovable-subtitle': '#D1D5DB',
      },
      spacing: {
        15: '3.75rem',
        30: '7.5rem',
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.07)' },
          '20%, 40%': { transform: 'scale(1.02)' },
          '50%': { transform: 'scale(1.06)' },
          '60%': { transform: 'scale(1)' },
        },
        blink: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'loading-dot': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'chat-message': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        blink: 'blink 1.2s step-end infinite',
        'loading-dot': 'loading-dot 1.4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        'chat-message': 'chat-message 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
