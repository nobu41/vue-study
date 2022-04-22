//リスト要素プロパティを更新しよう
new Vue({
  el:'#app',
  data:{
    list:[
      {id:1, name:'ピカ様', hp: 100},
      {id:2, name:'イワーク', hp: 100},
      {id:3, name:'けつばん', hp: 500}
    ]
  },
  methods:{
    // 攻撃ボタンをクリックしたときのハンドラ
    doAttack:function (index){
      this.list[index].hp -= 10 // HPを減らす
    }
  }
})