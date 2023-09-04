<script setup>
// click イベント
    const clickButton = () => {
      console.log('click button');
    };
    const clickButton2 = (msg) => {
      console.log(msg);
    };
    const another = (msg) => {
      console.log(msg);
    };
//event オブジェクト
    const clickButton3 = (event) => {
      console.log(event.target);
      //event オブジェクトから要素にアクセスできるので要素スタイルを変更可能
      event.target.style.backgroundColor = 'red';
    };

</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 イベントの設定
--------------------------------- -->
<!-- click イベント -->
<!-- v-on:イベント名="関数名" -->
    <button v-on:click="clickButton">クリック</button>
    <button @dblclick="clickButton">Wクリックでイベント</button>
    <button @mouseover="clickButton">マウスオーバーでイベント</button>
    <button @mouseenter="clickButton">マウスオーバーでイベント</button>

    <!-- ボタンをクリックすると引数で渡した文字列をコンソールで表示 -->
    <button @click="clickButton2('クリック')">クリック</button>

    <!-- クリックイベントを受け取って複数の関数を実行することも可能 -->
    <button @click="clickButton2('クリック'), another('click')">クリック</button>


<!-- event オブジェクト -->
    <!-- $eventでイベントオブジェクトを受け取る -->
    <button @click="clickButton3($event)">クリック</button>

</template>

<style>
/* スタイルを記述 */
</style>