// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  //cssファイル読み込み
  css: ['/assets/css/style2.css'],

  // components: [
  //   {
  //     path: '~/components',
  //     //pathPrefix の値が false の場合Navbar ファイルが一つであれば
  //     //nav ディレクトリに保存されていても Navbar タグで Auto imports される
  //     pathPrefix: false,
  //   },
  // ],
})
