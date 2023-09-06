<script setup>
import { ref, watchEffect } from 'vue';

const count = ref(0);
const count2 = ref(100);

//watchEffect ではページを開いた時にも一度処理が実行される
watchEffect(() => console.log(count.value));

//両方の変数を watchEffect に追加すると
//どちらのボタンをクリックしても watchEffect の関数が実行される
watchEffect(() => console.log(`${count.value}/${count2.value}`));

</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
Watcher
reactive な変数、computed プロパティの変更を監視し、
変更を検知した場合に別の処理を実行
--------------------------------- -->
<!-- watchEffect -->
<!-- reactive な変数と computed プロパティの変更の検知は
     watcher だけではなく watchEffectも可能
     watch のように特定の変数を指定するのではなく
     watchEffect の中に記述した関数で記述されている変数の変更を検知して実行  -->

<!-- Count のボタンをクリックした場合には watchEffect の関数が実行され、
     Count2 をクリックしても何も行わない  -->
     <button @click="count++">Count:{{ count }}</button>
     <button @click="count2++">Count2:{{ count2 }}</button>

</template>

<style>
/* スタイルを記述 */
</style>