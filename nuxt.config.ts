// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'cloudflare-pages',
  },
  runtimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  build: {
    transpile: ['@headlessui/vue', '@heroicons/vue'],
  },
})
