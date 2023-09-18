// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:['@/assets/css/main.css'],
  app:{
    head:{
      link:[
        {
          rel:"stylesheet", href: 'https://fonts.googleapis.com/css?family=Poppins'
        },
        {
          rel:"stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        }
      ]
    }
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
 
})
