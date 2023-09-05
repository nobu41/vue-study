<script setup>
import { ref, watch } from 'vue';
const count = ref(0);

//Count のボタンを押す度に watcher で変更を検知し、コンソールに count 数が表示
// watch(count, (count) => {
//   console.log('count:', count);
// });

//watcher では変更後の値だけではなく変更前の値も確認できる。
//第一引数に変更後の値、第二引数に変更前の値が渡されます。
//Count ボタンをクリックすると変更前の値と変更後の値がコンソールに表示
watch(count, (count, previousCount) => {
  console.log('count:', count);
  console.log('previousCount:', previousCount);
});


</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
Watcher
reactive な変数、computed プロパティの変更を監視し、
変更を検知した場合に別の処理を実行
--------------------------------- -->
<!-- watcher + ref -->
<!-- ref 関数で作成した reactive な変数 count を監視し
     count が更新されたら更新された後の値を表示するように設定 -->
     <button @click="count++">Count:{{ count }}</button>

</template>

<style>
/* スタイルを記述 */
</style>