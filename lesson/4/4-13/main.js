//S19 カスタムディレクティブ
//カスタムディレクティブの使い方
new Vue({
  el: '#app',
  directives: {
    focus: {
      // 紐付いている要素がDOMに挿入されるとき
      inserted: function (el) {
        el.focus() // 要素にフォーカスを当てる
      }
    }
  }
})