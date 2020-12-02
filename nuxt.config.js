
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700&display=swap"
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
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-2946778-55'
    }],
    ['@nuxtjs/google-gtag', { 
      id: 'G-ZXH6X0JP2H',
      config: {
        anonymize_ip: true, // anonymize IP 
      }
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
