<script setup>
// script タグ内の setup はscript タグの中で
// Vue.js のコード(Composition API)の記述を楽にするために必要な設定
// 削除しても JavaScript のコードが実行できなくなるわけではないが
// Vue.js を利用したコードは動かない

  console.log('Hello World');
  const message = 'Hello World';
  const message2 = '<h2>Hello World</h2>';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p>{{ message }}</p>

  <!-- マスタッシュは変数を表示するだけではなく JavaScript のコードを実行できる -->
  <div>{{ message.length * 10 }}</div>

  <!-- マスタッシュの中では三項演算子を実行できる。message の文字列が 10 よりも長い場合は Long と表示、10 以下だと Short と表示 -->
  <div>{{ message.length > 10 ? 'Long' : 'Short' }}</div>

  <!-- v-text ディレクティブ
  タグの中に文字を入力するとエラーになる  -->
  <p v-text="message"></p>

  <!-- v-html ディレクティブ
  変数に html タグを含めるとそのタグをブラウザ上でタグとして認識させる  -->
  <div v-html="message2"></div>




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
