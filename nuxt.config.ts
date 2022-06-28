import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        'bootstrap/dist/css/bootstrap.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
        '~/assets/css/main.css',
    ],
    modules: [
        'bootstrap-vue-3/nuxt',
    ],
    app: {
        head: {
            title: "DXA",
        }
    },
})
