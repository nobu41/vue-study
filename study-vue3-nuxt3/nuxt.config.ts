// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  //cssファイル読み込み
  // css: ['/assets/css/style2.css'],

  //title と description 設定（すべてのページで反映）
  app: {
    head: {
      //title
      title: 'Nuxt 3 basic',
      //meta
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      //favicon(publicから読み込み)
      link: [{ rel: 'icon', href: '/icon_pub.png' }],
    },
  },

  // components: [
  //   {
  //     path: '~/components',
  //     //pathPrefix の値が false の場合Navbar ファイルが一つであれば
  //     //nav ディレクトリに保存されていても Navbar タグで Auto imports される
  //     pathPrefix: false,
  //   },
  // ],
})
