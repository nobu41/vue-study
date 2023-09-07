<script setup>
//変数名はなんでもok
//defineProps 関数を利用する（import を行う必要はない）
const props = defineProps({
  message: String,
});
</script>

<template>
  <h2>初めてのコンポーネント</h2>
  <p>{{ props.message }}</p>
</template>