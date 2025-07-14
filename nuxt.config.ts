// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss', // tailwind sin postcss manual
    '@nuxt/ui'
  ],
  runtimeConfig: {
    public: {
      NAUPHILUS_API_BASE: process.env.NAUPHILUS_API_BASE,
    },
    NAUPHILUS_API_KEY: process.env.NAUPHILUS_API_KEY,
  },
})