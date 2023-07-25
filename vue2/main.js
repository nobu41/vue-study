var app = new Vue({
    el: '#app',
    data: {
        count: 0,
    },
    methods: {
        //ボタンクリック時のハンドラ
        increment:function(){
            //methods内でプロパティ（count）を使用する場合はthisが必要
            this.count += 1 //処理は再代入するだけでok
        }
    }
})
