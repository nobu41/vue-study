<template>
  <div>
    <h1>Main Page</h1>
    <button @click="handleClick">Coupon Get</button>
    
    <!-- <Coupon v-if="show" />にLazy を追加する -->
    <!-- ボタンクリック後の Coupon コンポーネントがダウンロード（表示）される -->
    <LazyCoupon v-if="show" />
  </div>
</template>
<script setup>
  const show = ref(false);

  const handleClick = () => {
    show.value = true;
  };
</script>