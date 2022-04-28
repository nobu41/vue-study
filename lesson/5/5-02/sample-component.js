//S23 コンポーネント間の通信 / 親から子
//コンポーネントをリストレンダリング
//子コンポーネント
Vue.component('comp-child', {
  template: '<li>{{ name }} HP.{{ hp }}</li>',
  props: ['name', 'hp']
})