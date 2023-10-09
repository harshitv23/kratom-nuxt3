// https://nuxt.com/docs/api/configuration/nuxt-config
//import { nacelleYotpoNuxtModule } from '@nacelle/nacelle-yotpo-nuxt-module';
//import { nacelle } from '@nacelle/nacelle-nuxt';

export default defineNuxtConfig({
  modules: [
    /* '@nuxt/image', */
    /* '@nacelle/nacelle-yotpo-nuxt-module' */
  ],
  /* nacelle: {
    yotpoAPIKey: process.env.YOTPO_API_KEY,
  }, */
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
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
  css: [
    // SCSS file in the project
    "bootstrap/dist/css/bootstrap.min.css", // you should add main.scss somewhere in your app
    "~/assets/scss/style.scss", // you should add main.scss somewhere in your app    
    
  ]
})