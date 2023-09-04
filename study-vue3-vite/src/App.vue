<script setup>
    const languages = ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Rust', 'Go'];
</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 リスト表示
--------------------------------- -->
<!-- 配列のリスト表示 -->
    <p>{{ languages[0] }}</p>
    <p>{{ languages[1] }}</p>
    <p>{{ languages[2] }}</p>
    <hr>

    <!-- 
    <p v-for="language in 変数名" v-bind:key="language">{{ language }}</p>
    key 属性に一意の値を設定する必要がある -->
    <p v-for="language in languages" v-bind:key="language">{{ language }}</p>
    <hr>
</template>

<style>
/* スタイルを記述 */
</style>