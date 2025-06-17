// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,//components呼び出す際にディレクトリ記載必要なしに
    },
  ],
  modules: ['@nuxt/ui'],
    ui: {
    //jsで色制御しているカラーがcssに出力されるようにする
    safelistColors: ['vrblue', 'pink','blue']
  },
  tailwindcss: {
    configPath: './tailwind.config.ts',
  },
  css: ['assets/css/main.scss'],
  googleFonts: {
    families: {
      'Noto Sans JP': [300 ,400, 500, 700] // 使用するウェイトを指定
    },
    display: 'swap', // または 'optional'
    download: true, // フォントをローカルに保存
    overwriting: false // trueにすると既存のフォントを上書きする
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      title: 'デザインシステム',
      meta: [
        { name: 'description', content: 'デザインシステム' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { name: 'robots', content: 'noindex, nofollow' }
      ],
      link: [
        //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },//ファビコン
        //{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },//appアイコン
      ],
      //baseURL: '/demo/d-system_nuxt/',
    },
  },
})
