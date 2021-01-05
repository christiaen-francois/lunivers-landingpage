
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - Lunivers',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.lunivers.lu'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Agence de graphisme et création de sites web de caractère - Weiswampach'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.lunivers.lu/img/og-fb.jpg'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Lunivers SARLS' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.lunivers.lu'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Agence de graphisme et création de sites web de caractère - Weiswampach'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.lunivers.lu/img/og-fb.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://www.lunivers.lu/img/og-fb.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Lunivers SARLS'
      }
    ],
    script: [
      { hid: 'jquery', src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js", type: "text/javascript", defer: true },
      { hid: 'parallax', src: "https://cdn.jsdelivr.net/npm/parallax-js@3.1.0/dist/parallax.min.js", type: "text/javascript", defer: true },
      //{ hid: 'gsap', src: "/js/gsap.min.js", type: "text/javascript", defer: true },
      //{ hid: 'three', src: "/js/three.module.js", type: "text/javascript", defer: false },
      //{ hid: 'appscripts', src: "/js/starfield.js", type: "text/javascript", defer: true },
      //{ hid: 'appscripts', src: "/js/scripts.js", type: "text/javascript", defer: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#ee2e7c',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-2946778-55'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
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
