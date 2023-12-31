/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '900px',
      'xl': '1024px',
      '2xl': '1280px',
    },
      fontFamily:{
        'sans': ['Roboto', 'sans-serif']
      },
    
    extend: {
      animation:{
        spinning: 'spinning 6s linear infinite',
      },
      keyframes: {
        spinning : {
          '0%':{
            transform: 'scale3d(1, 1, 1)'
          },
          '50%':{
            transform: 'scale3d(1.1, 1.1, 1.1)'
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)'
          }
        }
      },
      clipPath: {
        span1: 'polygon(0 92%, 100% 50%, 0 8%)',
        span2: 'polygon(100% 92%, 0 50%, 100% 8%)',
        span3: 'polygon(50% 0%, 8% 100%, 92% 100%)',
        span4: 'polygon(50% 100%, 92% 0, 8% 0)',
        span5: 'polygon(0 40%, 100% 0%, 60% 100%)',
        span6: 'polygon(40% 100%, 0 0%, 100% 40%)',
        span7: 'polygon(60% 0, 100% 100%, 0 60%)',
        span8: 'polygon(0 100%, 100% 60%, 40% 0)',
      }
    },
  },
  plugins: [require('tailwind-clip-path')],
}

