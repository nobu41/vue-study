var app = new Vue({
    el: '#app',
    data: {
        isChild: true,
        isActive: false,
        textColor: 'red',
        bgColor:'lightgray',
        classObject: {
            child: true,
            'is-active': false, //class名に‐を使う場合は'で囲む
        },
        styleObject: {
            color: 'blue',
            backgroundColor: 'lightgray' //css名に-がある場合は大文字でつなぐ（JSと同じ）
        },
    }
})
