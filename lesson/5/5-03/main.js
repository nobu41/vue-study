//S23 コンポーネント間の通信 / 親から子
//子のイベントを親にキャッチさせる
//親コンポーネント
new Vue({
  el: '#app',
  methods: {
    // childs-eventが発生した！
    parentsMethod: function () {
      alert('イベントをキャッチ！ ')
    }
  }
})