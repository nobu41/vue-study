<template>
  <h3>About Page(pages/about2.vue)</h3>
  <p>layouts/custom.vue適用</p>
</template>

<script setup>
//definePageMeta 関数を使えばlayouts/custom.vueが適用される
  definePageMeta({
    layout: 'custom',
  });
</script>