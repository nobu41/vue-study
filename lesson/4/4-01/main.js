//S16 算出プロパティで処理を含むデータを作成
//算出プロパティの使い方
new Vue ({
  el:'#app',
  data:{
    width:800
  },
  computed:{
    // 算出プロパティhalfWidthを定義
    halfWidth: function() {
      return this.width / 2
    }
  }
})