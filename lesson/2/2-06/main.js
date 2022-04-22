new Vue({
  el:'#app',
  data:{
    name:'',
    list:[
      { id:1, name:'デデンネ', point:100 },
      { id:2, name:'ピカチュウ', point:200},
      { id:3, name:'ゲッコウガ', point:500}
    ]
  },
  methods:{
    // 追加ボタンをクリックしたときのハンドラ
    doAdd: function(){
      // リスト内で1番大きいIDを取得
      var max = this.list.reduce(function (a, b){
        return a > b.id ? a: b.id
      },0)
      // 新しいモンスターをリストに追加
      this.list.push({
        id:max + 1, // 現在の最大のIDに+1してユニークなIDを作成
        name:this.name,
        point:500
      })
    }
  }
})