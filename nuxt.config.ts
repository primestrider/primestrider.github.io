// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "motion-v/nuxt",
  ],

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2024-11-01",

  // ✅ Optimasi untuk GitHub Pages
  app: {
    baseURL: "/", // ubah ke "/<repo-name>/" kalau repo bukan username.github.io
    buildAssetsDir: "_nuxt/", // folder asset default
  },

  nitro: {
    preset: "github_pages", // ✅ gunakan preset bawaan
    prerender: {
      routes: ["/"], // halaman utama
      crawlLinks: true, // cari & render semua link internal
    },
  },

  image: {
    format: ["webp", "avif"], // 🔥 format gambar modern
  },
  routeRules: {
    // pastikan route utama di-prerender
    "/**": { prerender: true },
  },
});
