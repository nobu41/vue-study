var app = new Vue({
    el: '#app',
    data: {
        message:'初期メッセージ',
        messageNumber:'数値としてうけとる',
        list: ['りんご','バナナ','いちご'],
        show: false
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)//[object HTMLButtonElement]
        }
    }
  })