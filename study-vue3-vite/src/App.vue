<script setup>
//computed 関数を import
import { computed } from 'vue';
  const users = [
    { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', admin: false },
    { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
  ];
  // Computed プロパティを利用して admin trueユーザのみ表示
  const adminUsers = computed(() =>
    users.filter((user) => user.admin === true)
  );
  
  //filter 関数内で条件式を変更するだけで admin ではないユーザを取得
  const generalUsers = computed(() => users.filter((user) => user.admin === false))

</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
Computed プロパティ
定義済みの変数を利用して計算、加工を行うことで
元のデータとは異なる形でユーザに表示することができる
--------------------------------- -->
<!-- Computed プロパティ adminUsers を利用して繰り返し処理 -->
<div v-for="user in adminUsers" :key="user.id">
  <div>{{ user.id }} {{ user.name }} {{ user.email }}</div>
</div>

</template>

<style>
/* スタイルを記述 */
</style>