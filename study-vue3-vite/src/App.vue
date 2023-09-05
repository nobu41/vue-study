<script setup>
import { reactive } from 'vue';

const form = reactive({
  message: 'Hello World',
});

const clickButton = () => {
  console.log(form.message);
};
</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 入力フォーム
--------------------------------- -->
<!-- input 要素 -->

<!-- reactive 関数で定義した場合 -->
<p>{{ form.message }}</p>
<input v-model="form.message" />
<div><button @click="clickButton">Click</button></div>

<!-- v-modelは以下のように
     value に v-bind を設定し input イベントを利用して文字を入力する度に
     input 要素に入力した値を$event オブジェクトから取得して設定している
<input :value="message" @input="message = $event.target.value" /> -->


</template>

<style>
/* スタイルを記述 */
</style>