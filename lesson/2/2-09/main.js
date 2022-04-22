//外部からデータを取得する
new Vue({
  el:'#app',
  data:{
    //初期値 空
    list:[]
  },
  created:function(){
    axios.get('list.json').then(function (response){
      // 取得完了したらlistリストに代入
      this.list = response.data
    }.bind(this)).catch(function (e){
      console.error(e)
    })
  }
})