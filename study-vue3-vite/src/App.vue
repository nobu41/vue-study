<script setup>
//関数を import
import { ref, reactive, computed } from 'vue';
const count = ref(0);

const user = reactive({
  firstName: 'John',
  lastName: 'Doe',
});

const fullName = () => {
  console.log('Function');
  return `${user.firstName} ${user.lastName}`;
};
const cFullName = computed(() => {
  console.log('Computed Propety');
  return `${user.firstName} ${user.lastName}`;
});
</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
Computed プロパティ
定義済みの変数を利用して計算、加工を行うことで
元のデータとは異なる形でユーザに表示することができる
--------------------------------- -->
<!-- Computed vs Function -->
<!-- input 要素を利用して reactive な変数を更新 -->
<h2>fullName: {{ fullName() }}</h2>
<h2>fullName: {{ fullName() }}</h2>
<h2>fullName: {{ fullName() }}</h2>
<h2>cFullName: {{ cFullName }}</h2>
<h2>cFullName: {{ cFullName }}</h2>
<h2>cFullName: {{ cFullName }}</h2>
<!-- fullName 関数ではすべての fullName 関数の実行で Math.randam 関数が実行されるため異なる値が表示されていますが Computed プロパティの cFullName はキャッシュ機能を持っているため一度 Math.randam 関数が実行されるだけで後は同じ値を持 -->

<input v-model="user.firstName" />
<button @click="count++">Count:{{ count }}</button>
</template>

<style>
/* スタイルを記述 */
</style>