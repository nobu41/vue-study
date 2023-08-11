var app = new Vue({
    el: '#app',
    data: {
        name: 'キマイラ',
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
    created: function() {
        //要素を一括して更新する
        //グローバルAPIのVue.setメソッドを使用
        //このメソッドはエイリアスとしてthis.$setでも使用できる
        //this.$set( 更新するデータ,インデックス or キー, 新しい値 )
        //this.$set(this.list, 0, { id:1, name: 'キングスライム', hp: 500 } )

        //this.$setメソッドは元々持っていないプロパティを
        //リアクティブデータとして追加するためにも使用できる
        //すべての要素にactiveプロパティを追加したい
        this.list.forEach(function(item) {
            this.$set(item, 'active', false)
            //「item.active = false」ではリアクティブにならない
        })
    },
})
