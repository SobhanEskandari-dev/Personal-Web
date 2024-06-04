//  @type {import('tailwindcss').Config} 

module.exports = {
  content: ['./*.{html,js}'],
  theme: {
  extend: {
    animation: {
      'sobhan': 'sobhan 4s linear infinite',
    },
    keyframes: {
      sobhan : {
        '100%': { transform: 'translateX(0px)' },
        '0%': { transform: 'translateX(1px)' },
        '25%': { transform: 'translatex(10px)' },
        '50%': { transform: 'translateX(0px)' },
        '75%': { transform: 'translateX(-10px)' },
        '99%':{transform: 'translatex(0px)'}
      }
    }
    
  },
  },
  plugins: [],
  }