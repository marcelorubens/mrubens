
export default {
  server: {
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },   // other configs 
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Marcelo Rubens',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  styleResources: {
    scss: [
      '@/assets/sass/global.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
