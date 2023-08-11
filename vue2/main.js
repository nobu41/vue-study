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
    methods:{
        //要素を更新する際に以下のやり方では更新を検知できない
        //①インデックス数値を使った配列要素の更新
        //②後から追加されたプロパティの更新
            //this.list = []  //プロパティの更新
            //this.list[0].name = "new"  /プロパティの更新
            //this.list[0] = 'new'  //配列要素の更新なのでNG
            

        //リストに新しい要素を追加する
        //配列メソッドのpushかunshift
        //this.list.push(新しい要素)
        doAdd: function() {
            //リスト内で一番大きいIDを取得
            var max = this.list.reduce(function(a, b){
                return a > b.id ? a : b.id
            }, 0 )
            //新しいモンスターをリストに追加
            this.list.push({
                id: max + 1,
                name:this.name,
                hp: 200,
            })
        },
        //削除ボタンをクリックしたときのハンドラ
        doRemove: function(index) {
            //受け取ったインデックスの位置から１個要素を削除
            this.list.splice(index,1)
        }
        //よくある配列のメソッド（これらの配列メソッドは対象の配列を直接、変更する）
        //・push
        //・pop
        //・shift
        //・unshift
        //・splice
        //・sort
        //・reverse

        //配列インデックスを使って操作してはいけないケース
        //算出プロパティでは元のデータとインデックスが変わることがあり、
        //操作データの食い違いが発生する可能性があるのでユニークなIDから操作データを検索する

    }
})
