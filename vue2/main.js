var app = new Vue({
    el: '#app',
    data: {
        message:'初期メッセージ',
        messageNumber:'数値としてうけとる',
        list: ['りんご','バナナ','いちご']
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)//[object HTMLButtonElement]
        }
    }
  })