//S16 算出プロパティで処理を含むデータを作成
//算出プロパティのキャッシュ機能
new Vue({
  el: '#app',
  computed: {
    computedData: function() { return Math.random() }
  },
  methods: {
    methodsData: function() { return Math.random() }
  }
})