//S23 コンポーネント間の通信 / 親から子
//子のイベントを親にキャッチさせる
//子コンポーネント
Vue.component('comp-child', {
  template: '<button v-on:click="handleClick">イベント発火</button>',
  methods: {
    // ボタンのクリックイベントのハンドラでchilds-eventを発火する
    handleClick: function () {
      this.$emit('childs-event')
    }
  }
})