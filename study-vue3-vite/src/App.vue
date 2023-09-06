<script setup>
import { reactive, watch } from 'vue';
const state = reactive({
  count: 0,
});

//reactive 関数のオブジェクトのプロパティを監視する場合
//関数の形に変更することで state.count の監視が可能。
//Count ボタンをクリックすると変更前の値と変更後の値がコンソールに表示
watch(
  () => state.count,
  (count, previousCount) => {
    console.log('count:', count);
    console.log('previousCount:', previousCount);
  }
);
//以下はエラーになる
// watch(state.count, (count, previousCount) => {
//     console.log('count:', count);
//     console.log('previousCount:', previousCount);
//   });

</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
Watcher
reactive な変数、computed プロパティの変更を監視し、
変更を検知した場合に別の処理を実行
--------------------------------- -->
<!-- watcher + reactive -->
<!-- reactive 関数を使って定義した count に対しても watcher の動作確認
     監視対応に state.count を設定 -->
     <button @click="state.count++">Count:{{ state.count }}</button>

</template>

<style>
/* スタイルを記述 */
</style>