import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        "~/assets/css/styles.css",
        "~/assets/css/tailwind.css"
    ],
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'Front-end Coders Mauritius',
                name: 'Front-end Coders Mauritius',
                content: 'Front-end Coders Mauritius'
            },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "900" },
        ],
    }
})