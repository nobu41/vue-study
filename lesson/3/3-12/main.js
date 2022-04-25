//S15 マウント要素外のイベントと操作
//スムーススクロールの実装
var scroll = new SmoothScroll()
new Vue ({
  el:'#app',
  methods:{
    scrollTop: function () {
      scroll.animateScroll(0)
    }
  }
})