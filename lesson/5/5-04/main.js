//S23 コンポーネント間の通信 / 親から子
//親が持つデータを操作しよう
//親コンポーネント
new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 }
    ]
  },
  methods: {
    // attackが発生した！
    handleAttack: function (id) {
      // 引数のIDから要素を検索
      var item = this.list.find(function (el) {
        return el.id === id
      })
      // HPが0より多ければ10減らす
      if (item !== undefined && item.hp > 0) item.hp -= 10
    }
  }
})