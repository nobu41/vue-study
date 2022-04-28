//S23 コンポーネント間の通信 / 親から子
//
Vue.component('comp-child', {
  // テンプレートで受け取ったvalを使用
  template: '<p>{{ val }}</p>',
  // 受け取る属性名を指定
  props: ['val']
})