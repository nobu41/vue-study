<script setup>
//reactive, computed 関数を import
  import { reactive, computed } from 'vue';
  const user = reactive({
    firstName: 'John',
    lastName: 'Doe',
  });

  //関数の戻り値が template タグの中で設定した fullName に表示
  const fullName = computed(() => `${user.firstName} ${user.lastName}`);
</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
Computed プロパティ
定義済みの変数を利用して計算、加工を行うことで
元のデータとは異なる形でユーザに表示することができる
--------------------------------- -->
<!-- <h2>fullName: {{ user.firstName }} {{ user.lastName }}</h2> -->
<h2>fullName: {{ fullName }}</h2>

</template>

<style>
/* スタイルを記述 */
</style>