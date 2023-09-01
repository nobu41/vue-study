<script setup>
// 関数の実行
// script タグの中では直接関数を実行ができる。
// 動作確認のため upperCase 関数を追加します。
// upperCase 関数の中では変数の message を大文字にする処理を行います。
  let message = 'Hello World';

  const upperCase = () => {
    message = message.toUpperCase();
  };

  upperCase();
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div v-text="message"></div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
