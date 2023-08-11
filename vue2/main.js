var app = new Vue({
    el: '#app',
    data: {
        list: [],//リセットよして空にしておく
    },
    //特定のタイミングで自動的に処理を挟むにはライフサイクルフックを使用する
    //インスタンス作成後すぐにデータが欲しいのでcreatedを使う
    created: function() {
        //リストデータはリアクティブなデータのためレスポンスを受け取って
        //データに代入した時点で画面のリストも更新される。
        //しかし、レスポンスが遅いとその間何も表示されないためローディングアニメを入れると良い
        axios.get('list.json').then(function(response){
            //取得完了したらlistに代入
            this.list = response.data
        }.bind(this)).catch(function(e){
            console.error(e)
        })
    }
})
