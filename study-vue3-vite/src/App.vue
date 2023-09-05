<script setup>
//関数を import
import { reactive, computed } from 'vue';
  const user = reactive({
    firstName: 'John',
    lastName: 'Doe',
  });
  const fullName = () => `${user.firstName} ${user.lastName}`;
</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
Computed プロパティ
定義済みの変数を利用して計算、加工を行うことで
元のデータとは異なる形でユーザに表示することができる
--------------------------------- -->
<!-- Computed vs Function -->
<!-- Computed プロパティで記述した内容を関数で記述
     マスタッシュの中で関数を利用する場合関数の名前の後ろに()が必要 -->
<h2>fullName: {{ fullName() }}</h2>

</template>

<style>
/* スタイルを記述 */
</style>