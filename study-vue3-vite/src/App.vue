<script setup>
// reactive の設定
// vue から reactive 関数を import 
import { reactive } from 'vue';
const state = reactive({
  count: 0,
});

</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 Reactivity
--------------------------------- -->
<!-- reactive の設定 -->
<!-- count の値を表示する場合はオブジェクトだから state.count　値を増やす場合も state.count++ -->
<button type="button" @click="state.count++">count is: {{ state.count }}</button>


</template>

<style>
/* スタイルを記述 */
</style>