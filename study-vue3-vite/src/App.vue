<script setup>
// ref の設定
// script タグの中で count の数を増やす場合は下記のように 
// count.value を利用する必要がある
import { ref } from 'vue';
const count = ref(0);

const addCount = () => {
  count.value++;
};

</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 Reactivity
--------------------------------- -->
<!-- ref の設定 -->
<!-- count 数が増やせるようにするためには ref 関数または reactivity 関数を使って変数に reactivity を持たせる必要がある -->
  <button type="button" @click="addCount">count is: {{ count }}</button>


</template>

<style>
/* スタイルを記述 */
</style>