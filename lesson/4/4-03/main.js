//S16 算出プロパティで処理を含むデータを作成
//ゲッターとセッター
new Vue ({
  el:'#app',
  data:{
    width:800
  },
  computed:{
    halfWidth: {
      get: function(){
        return this.width / 2
      },
      // halfWidth の2倍の数値を width に代入する
      set: function(val){
        this.width = val * 2
      }
    }
  }
})