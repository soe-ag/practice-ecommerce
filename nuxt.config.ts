import Aura from "@primeuix/themes/aura";
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@unocss/nuxt",
    "@primevue/nuxt-module",
    "@nuxt/eslint",
    // "@nuxtjs/supabase",
  ],
  unocss: {
    nuxtLayers: true,
  },
  primevue: {
    usePrimeVue: true,
    options: {
      // ripple: true,
      // inputVariant: "filled",
      theme: {
        preset: Aura,
        // options: {
        //   prefix: "p",
        // darkModeSelector: "system",
        // darkModeSelector: ".my-app-dark",
        //   cssLayer: false,
        // },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  nitro: {
    preset: "node", // Setting up Nitro in the nuxt.config.ts file does not prevent you from using external APIs. Nitro is the server engine for Nuxt, and its purpose is to handle your server-side logic, including API routes like the one you created (server/api/products.ts). You can still make requests to external APIs from your Nuxt app.
  },
});
