// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
    ui: {
    //jsで色制御しているカラーがcssに出力されるようにする
    safelistColors: ['vrblue', 'pink','blue']
  },
  tailwindcss: {
    configPath: './tailwind.config.ts',
  },

})
