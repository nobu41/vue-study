var app = new Vue({
    //el：アプリケーションを紐づける要素のセレクタ（マウントする要素）
    el: '#app',

    data: {
    //data：オブジェクトや配列も登録できる。
        show: true,
        message:'vue'
    },

    computed:{
    //computed：dataと同様に扱うことができる、関数によって算出されたデータ。算出プロパティとも呼ばれる。
        computedMessage: function() {
            //処理した結果をデータとして返す
            return this.message + '!'
        }
    },

    //ライフハックサイクル:多数ある。９種？タイミングを指定して実行する必要がある場合に使う。詳しくはぐぐれ
    created: function(){
    //このインスタンスの作成・初期化が終わったらすぐ呼び出される。DOMはまだ構築されない
    //thisはアクセスできるが、$el、getElementById()にはアクセスできない。
        console.log('created')
    },

    mounted:{
    //インスタンスの状態を使ってDOMが作成された直後に呼び出される。
    //インスタンス内のテンプレートや$el、getElementById()が使用できる。（すべての子コンポーネントがマウントされている事は保証されない）
    },

    methods: {
    //処理を分けたり、イベントハンドラなど細い実装を担当。
        myMetods: function(){
        //処理
        }
    }
  })

  //【備考】
  //・DOM構造の本体はJSデータ
  //・ディレクティブの値はJSの式になってる
  //・HTMLコーディングのためにコンポーネントを使ってもよい。
  //・必要なデータやメソッドはオプションに定義する。
  //・new Vue()は1つ作りコンポーネントでUIを構築する