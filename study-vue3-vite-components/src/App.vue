<script setup>
// コンポーネントファイルを作成
// 別のコンポーネントファイルから作成したコンポーネントファイルを import
// template タグの中に import したコンポーネントのタグを埋め込む
//import HelloWorld from './components/HelloWorld.vue'

//import した Hello コンポーネントの内容が表示
import Hello from './components/Hello.vue';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- Hello コンポーネント -->
  <Hello />
  
  <!-- コンポーネントの親子関係 -->
  <!-- import するコンポーネントと import されるコンポーネントで親子関係を持つことになる。
       import を行うコンポーネントを親コンポーネントと呼び、
       import されるコンポーネントを子コンポーネントと呼ぶ -->


  <!-- コンポーネントの再利用 -->
  <!-- import した Hello コンポーネントを template タグの中で複数回追加できる -->
  <!-- 親コンポーネント側のファイルでは何度でもコンポーネントを利用することができる -->
  <!-- それぞれのコンポーネントは独立しているため Reactive な変数は他のコンポーネントのボタンの影響を受けない -->
  <Hello />
  <Hello />


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
