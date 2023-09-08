<template>
  <div>
    <!-- Auto Imports を利用しない場合  -->
    <Navbar />

    <!-- nav/NavBar.vue の場合はNavNavBar としてもだめ
         NavNavBar では、nav/nav/Bar.vue ファイルを
         import していることになる -->

    <slot />
  </div>
</template>

<script setup>
//通常の importも利用できる（Auto Imports を利用しない場合）
  import Navbar from '@/components/nav/Navbar';
</script>