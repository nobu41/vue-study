//S17 ウォッチャでデータを監視して処理を自動化
//実行頻度の制御
new Vue ({
  el: '#app',
  data: {
    value: '編集してみてね'
  },
  watch: {
    value: _.debounce(function (newVal) {
        // ここへコストの高い処理を書く
        console.log(newVal)
      },
      // valueの変化が終わるのを待つ時間をミリ秒で指定
      2500)
  }
})