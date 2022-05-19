//S23 コンポーネント間の通信 / 親から子
//親が持つデータを操作しよう
//子コンポーネント
Vue.component('comp-child', {
  template: '<li>{{id}}{{ name }} HP.{{ hp }}\
  <button v-on:click="doAttack">攻撃する</button></li>',
  props: {
    id: Number,
    name: String,
    hp: Number
  },
  methods: {
    // ボタンのクリックイベントのハンドラから$emitでattackを発火する
    doAttack: function () {
      // 引数として自分のIDを渡す
      this.$emit('attack', this.id)
    }
  }
})