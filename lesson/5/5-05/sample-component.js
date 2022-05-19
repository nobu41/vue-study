//S23 コンポーネント間の通信 / 非親子
//子コンポーネントを参照する$refs
//子コンポーネント
Vue.component('comp-child', {
  template: '<div>...</div>',
  created: function () {
    // 自分自身のイベント
    this.$on('open', function () {
      console.log('なにか処理')
    })
  }
})