<script setup>
//関数を import
import { reactive, computed } from 'vue';
  const user = reactive({
    firstName: 'John',
    lastName: 'Doe',
  });
  //関数と Computed プロパティを同時に実行するために Computed プロパティの cFullName 関数を追加
  const fullName = () => `${Math.random()} ${user.firstName} ${user.lastName}`;
  const cFullName = computed(
    () => `${Math.random()} $${user.firstName} ${user.lastName}`
  );

</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
Computed プロパティ
定義済みの変数を利用して計算、加工を行うことで
元のデータとは異なる形でユーザに表示することができる
--------------------------------- -->
<!-- Computed vs Function -->
<!-- Computed プロパティのキャッシュ機能について -->
<!-- キャッシュ機能を確認するために tempalte タグの中で複数の関数と computed プロパティを実行 -->
<h2>fullName: {{ fullName() }}</h2>
<h2>fullName: {{ fullName() }}</h2>
<h2>fullName: {{ fullName() }}</h2>
<h2>cFullName: {{ cFullName }}</h2>
<h2>cFullName: {{ cFullName }}</h2>
<h2>cFullName: {{ cFullName }}</h2>
<!-- fullName 関数ではすべての fullName 関数の実行で Math.randam 関数が実行されるため異なる値が表示されていますが Computed プロパティの cFullName はキャッシュ機能を持っているため一度 Math.randam 関数が実行されるだけで後は同じ値を持 -->

<input v-model="user.firstName" />

</template>

<style>
/* スタイルを記述 */
</style>