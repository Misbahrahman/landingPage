/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bounceX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' }
        },
        zoomInRotate: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.6) translateY(30px) rotate(-3deg)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1) translateY(0) rotate(0)' 
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
        fadeDown: 'fadeDown 1s ease-out forwards',
        bounceX: 'bounceX 1s ease-in-out infinite',
        zoomInRotate: 'zoomInRotate 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }
    }
  }
}