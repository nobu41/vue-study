<script setup>
// キー修飾子
  const send = () => {
    console.log('send');
  };
</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 イベントの設定
--------------------------------- -->
<!-- キー修飾子 -->
    <!-- キーボードのキーが押された時にイベントを受け取りたい場合 -->
    <form @submit.prevent="send">
      <button @keyup.enter="submit">送信</button>
    </form>
    <!-- Enter ボタンを押すと enter イベントが発生し、@keyup.enter イベントでイベントを受け取り submit 関数を実行。submit 関数によるイベントを@submit イベントが受け取り send 関数が実行され、コンソールに"send"が表示される。 -->


<!-- そのほかのキー修飾子には下記がある。設定することでそれぞれのキーを押した際に発生するイベントを取得することができます。
.enter
.tab
.delete
.esc
.space
.up
.down
.left
.right -->
</template>

<style>
/* スタイルを記述 */
</style>