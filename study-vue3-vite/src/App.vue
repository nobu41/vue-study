<script setup>
// reactive の設定
// vue から ref 関数を import 
import { ref } from 'vue';

// script タグ内で count の数を増やす場合
const state = ref({
  count: 0,
});
const addCount = () => {
  state.value.count++;
};
</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 Reactivity
--------------------------------- -->
<!-- reactive の設定 -->
<!-- count の値を表示する場合はオブジェクトだから state.count　値を増やす場合も state.count++ -->
<!-- script タグ内で count の数を増やす場合 -->
<button type="button" @click="addCount">count is: {{ state.count }}</button>

<!-- ref と reactive の違い -->
<!-- ref 関数と reactive 関数の一番の違い
ref は script タグ内で値にアクセスする場合に value を利用する
reactive ではオブジェクトのみを扱うのに対して
ref では primitive な値(string や boolen など)もオブジェクトも設定することができる -->




</template>

<style>
/* スタイルを記述 */
</style>