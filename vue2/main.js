var app = new Vue({
    el: '#app',
    data: {
        message:'hello vue.js!',
        list: ['りんご','バナナ','いちご']
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)//[object HTMLButtonElement]
        }
    }
  })