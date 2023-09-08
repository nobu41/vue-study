<template>
  <div>
    <h1>Main Page</h1>
    <div>
      <!-- /assets/から画像を表示 パスの先頭に”~”が必要 -->
      <img src="~/assets/icon.png" alt="Nuxt" />

      <!-- /public/から画像を表示 publicの記載は不要 -->
      <img src="/icon_pub.png" alt="Nuxt" />
    </div>
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