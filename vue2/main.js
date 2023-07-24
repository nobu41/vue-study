var app = new Vue({
    el: '#app',
    data: {
        message: 'hello Vue.js!',
        scroll: 0,
    },
    methods: function() {
        this.scroll = 10 //要素のスクロール量を操作
    }
})
