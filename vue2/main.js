var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'スライム',
                hp: 100
            },
            {
                id: 2,
                name: 'ドラゴン',
                hp: 500
            },
            {
                id: 3,
                name: 'ゴブリン',
                hp: 200
            }
        ],
    },
    methods: {
        //攻撃ボタンクリック時のイベントハンドラ
        doAttack: function(index) {
            this.list[index].hp -= 10 //HPを10減らす
        },
        //配列メソッドのfilterなど配列を直接、変更しないメソッドでは返り値を使ってリストデータを書き換えることができる
        this.list = this.list.filter(function(el) {
            return el.hp >= 100
        })
    },
})
