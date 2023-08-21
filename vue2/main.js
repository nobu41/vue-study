var app = new Vue({
    el: '#app',
    data: {
        show:true,
        message:'hello!'
    },
    methods: {
        handleClick: function () {
            alert('クリックしたよ')
          },
        handleInput: function (event){
            //代入前に何か処理を行う
            this.message =event.target.value
        }
    }
})
