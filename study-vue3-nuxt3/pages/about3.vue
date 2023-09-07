<template>
  <h3>About Page(pages/about3.vue)</h3>
  <p>layouts/default.vue適用なし</p>
</template>

<script setup>
//definePageMeta 関数を使えばlayouts/default.vueが適用されなくなる
  definePageMeta({
    layout: false,
  });
</script>