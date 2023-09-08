<!-- index.vue で compsables の useNuxtApp 関数を実行して
     プラグイン$hello を取り出す処理 -->
<template>
  <div>
    <h1>Main Page</h1>
    <h2>{{ $hello('World') }}</h2>
  </div>
</template>

<script setup>
  const { $hello } = useNuxtApp();
</script>