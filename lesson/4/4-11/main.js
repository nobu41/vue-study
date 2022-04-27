//S18 フィルタでテキストの変換処理を行う
//フィルタの使い方
new Vue({
  el: '#app',
  data: {
    price: 19800
  },
  filters: {
    localeNum: function (val) {
      return val.toLocaleString()
    }
  }
})