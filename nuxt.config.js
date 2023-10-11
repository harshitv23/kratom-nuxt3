/* const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin; */
export default {
    /* configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()]
    }, */
    router: {
        routes: [
          {
            path: '/our-reviews',
            component: 'pages/our-reviews.vue',
          },
        ],
      },
    image: {
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/dv8z5nr6r/images/f_auto,q_auto/'
        },
        domains: ['res.cloudinary.com','cloudinary.com','kratomspot.com']
      },
      serverMiddleware: {
        '/_ipx': '~/server/middleware/ipx.js'
      },
    generate: {
        fallback: true
    },
    devtools: {
        enabled: true,
    
        timeline: {
          enabled: true
        }
      },
    /* publicRuntimeConfig: {
        api_url: process.env.VUE_APP_API_URL,
        site_url: process.env.VUE_APP_SITE_URL,
        consumer_key: process.env.VUE_APP_CONSUMER_KEY,
        secret_key: process.env.VUE_APP_SECRET_KEY,
        affiliate_public: process.env.VUE_APP_AFFILIATEWP_PUBLIC_KEY,
        affiliate_token: process.env.VUE_APP_AFFILIATEWP_TOKEN
    }, */
    runtimeConfig: {
        // Config within public will be also exposed to the client
        public: {
          api_url: process.env.VUE_APP_API_URL,
          site_url: process.env.VUE_APP_SITE_URL,
          consumer_key: process.env.VUE_APP_CONSUMER_KEY,
          secret_key: process.env.VUE_APP_SECRET_KEY,
          affiliate_public: process.env.VUE_APP_AFFILIATEWP_PUBLIC_KEY,
          affiliate_token: process.env.VUE_APP_AFFILIATEWP_TOKEN
        }
      },
    router: {
        scrollBehavior: null
    },
    target: 'static', // default is 'server'
    
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Buy Kratom Online: Capsules, Powder & Tea | Kratom Spot',
        titleTemplate: '%s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/new-favicon.png' },
        ],
        htmlAttrs: {
            lang: 'en',
        },
        script: [            
            {              
              src: '~/plugins/yotposcript.js',
              //defer: true,              
            },
            /* ,
            {
                innerHTML: "cntrUpTag.track('cntrData', '1002bc32bada5173');",
                type: 'text/javascript'
              } */
            {
              // Add a script to the end of the <body></body>
              src: '//staticw2.yotpo.com/qISoyNDMzxbhZewW638yicv9a0Q2QtUPU5p1Xr57/widget.js',
              defer: true,
              //body: true,
            },
          ]
        
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/scss/style.scss',
        '~/assets/css/animation.css',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { 
            src: '~/plugins/yotposcript.js', 
            mode: 'client'
        },
       /*  '~/plugins/vue-awesome-swiper.js', */
        '~/plugins/vuejs-pagiante.js',
        '~/plugins/observe-visibility.js',
        /* '~/plugins/persistedState.client.js', */
        /* { 
            src: '~/plugins/yotpo.js', 
            mode: 'client'
        }, */
        { 
            src: '~/plugins/bootstrap.js', 
            mode: 'client'
        },
        {
            src: '~/plugins/vue-js-modal', 
            mode: 'client'
        },
        /* { 
            src: '~/plugins/notifications-client.js', 
            mode: 'client' 
        }, */
        {   
            src : '~/plugins/readmore.js', 
            mode: 'client'
        },
        {
           src: '~/plugins/google-analytics.js',
           mode: 'client'
        }/* ,
        {
            src: '~/plugins/prerender-middleware.js',
            mode: 'client'
        } */
    ],    
    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxt/image',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@pinia/nuxt',
        /* '@nuxtjs/style-resources', */
        /* '@nuxtjs/axios', */
        /* '@nacelle/nacelle-yotpo-nuxt-module' */
        

    ],
    /* nacelle: {
        // ...other Nacelle config,
        yotpoAPIKey: process.env.YOTPO_API_KEY
      }, */
    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        extend (config, ctx) {
        },
        babel: {
            compact: true,
        },
    },

    serverMiddleware: [
        '~/plugins/prerender-middleware.js'
    ]
}
