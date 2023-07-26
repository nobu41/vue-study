var app = new Vue({
    el: '#app',
    data: {
        count: 0,
    },
    methods: {
        //Vueインスタンスのthisを使用したいときは関数の記述方法に気をつける
        increment:function(){
            //あらかじめ別の変数に代入しておけばsetTimeout内で使用できる
            var  vm = this
            setTimeout(function() { vm.count++ }, 100)
            //bindでthisを紐付け関数を作成する
            setTimeout(functon() { this.count++ }.bind(this),100)
            //アロー関数はsetTimeoutが呼ばれるincrementメソッドのthis
            //つまりvueインスタンスにアクセスできる
            setTimeout(() >= { this.count++ }, 100)
            //無名関数ではなくインスタンスのメソッドを指定する
            setTimeout(this.callback, 100)

            //別パターン
            //thisを用いてvueインスタンスに
            //アクセスする必要があるメソッドの定義にはアロー関数は使えない
            //
            increment:() {
                //これはvueインスタンスのthisを使用できる
            }

        }
    }
})
