//S14 フォーム入力バインディング
//画像ファイル
new Vue ({
  el:'#app',
  data:{
    preview:''
  },
  methods:{
    handleChange: function (event){
      var file = event.target.files[0]
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file)
      }
    }
  }
})