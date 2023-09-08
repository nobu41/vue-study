<template>
  <div>
    <h1>Main Page</h1>
  </div>
</template>

<!-- index.vue ファイルからscriptでimport -->
<script setup>
import '@/assets/css/style.css';
</script>

<!-- style タグで import @が必要 -->
<style scoped>
@import '@/assets/css/style3.css';
</style>