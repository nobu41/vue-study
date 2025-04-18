// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: '/demo/nuxtui-v2/',
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image"
  ],
  // icon: {
  //   /* アイコン設定 */
  //   iconSrc: 'node_modules/@iconify/icons/', // ローカルのアイコンパスを指定
  // },
  compatibilityDate: "2025-04-18"
})