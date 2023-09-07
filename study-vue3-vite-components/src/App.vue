<script setup>
import Hello from './components/Hello.vue';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- Hello コンポーネント -->
  <Hello message="Propsの使い方" />
  <!-- 設定する値を外側から変更することで同じコンポーネントでも異なる内容を表示できる -->
  <Hello message="defineProps関数を利用" />
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
