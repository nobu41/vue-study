//S18 フィルタでテキストの変換処理を行う
//複数のフィルタをつなげて使用する
new Vue({
  el: '#app',
  filters: {
    // 小数点以下を第2位に丸めるフィルタ
    round: function (val) {
      return Math.round(val * 100) / 100
    },
    // 度からラジアンに変換するフィルタ
    radian: function (val) {
      return val * Math.PI / 180
    }
  }
})