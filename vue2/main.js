//オプションの外に定義されたデータでもVue.jsとして登録するとリアクティブデータに変換される
var state = { count: 0 }

var app = new Vue({
    el: '#app',
    data: {
        state: state,
        message: 'Veu.js', //messageは変化を検知できるようになる
        //dataオプションの直下プロパティは後から追加できないため、
        //内容が決まってなくても空のデータとして定義しておく(なるべく後から代入されるデータと同じ型で定義する)
        //例
        newTodoText: '',
        visitcount: 0,
        hideCompletedToDos: false,
        todos: [],
        error: null
    }
  })

state.count++ // state.countはリアクティブデータになっている