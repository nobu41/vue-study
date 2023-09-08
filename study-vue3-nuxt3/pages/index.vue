<template>
<!-- pages/index.vue ファイルで useCounter を利用したい場合 -->
<!-- 下記のように import なし(Auto imports)で利用することができる -->
  <div>
    <h1>Main Page</h1>
    <div>Count:{{ count }}</div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>
</template>

<script setup>4
  const { count, inc, dec } = useCounter(100);
</script>