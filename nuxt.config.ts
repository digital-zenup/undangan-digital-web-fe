// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "~/tailwind.config.js",
    viewer: false,
  },

  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900],
      "Libre Baskerville": {
        wght: [400, 700],
        ital: [400],
      },
      Montserrat: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@vueuse/nuxt"],
});
