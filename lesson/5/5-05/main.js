//S23 コンポーネント間の通信 / その他
//子コンポーネントを参照する$refs
//親コンポーネント
new Vue({
  el: '#app',
  methods: {
    handleClick: function () {
      // 子コンポーネントのイベントを発火
      this.$refs.child.$emit('open')
    }
  }
})