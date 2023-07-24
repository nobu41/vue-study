var app = new Vue({
    el: '#app',
    data: {
        //オブジェクトデータ
        message: {
            value: 'hello Vue.js!'
        },

        //配列データ
        list: ['りんご', 'バナナ', 'いちご'],
        //別のデータを使用してlistから取り出す要素を動的に
        num:1
    }
  })
