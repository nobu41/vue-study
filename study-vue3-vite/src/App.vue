<script setup>
// form タグの submit が実行されるとページのリロードが必ず行われる。
// ページのリロードを防ぐためには event オブジェクトを利用して
//  event.preventDefault を実行する必要がある。

// イベント修飾子を使わない方法
  const send = () => {
    event.preventDefault();
    console.log('send');
  };

// イベント修飾子
// vent オブジェクトを利用せずに実現可能
  const send2 =() => {
    console.log('send2');
  };

</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 イベントの設定
--------------------------------- -->
<!-- イベント修飾子 -->
    <!-- イベント修飾子を使わない方法 -->
    <form @submit="send($events)">
      <button>送信</button>
    </form>


    <!-- イベント修飾子 -->
    <!-- イベント名の後に.修飾子をつけることで機能を追加 -->
    <form @submit.prevent="send2">
      <button>送信</button>
    </form>
    <!-- イベント修飾子には prevent のほかに event.stopPropagation を実行するために利用することができる stop などがある -->
</template>

<style>
/* スタイルを記述 */
</style>