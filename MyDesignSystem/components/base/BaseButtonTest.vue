<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'danger',
  loading?: boolean,
  disabled?: boolean,
}>()

const emit = defineEmits(['click'])

const variantToColor = {
  primary: 'primary',
  secondary: 'gray',
  danger: 'pink',
}
</script>

<template>
  <UButton
    :color="variantToColor[variant || 'primary']"
    :loading="loading"
    :disabled="disabled"
    @click="emit('click')"
  >
    <slot />
  </UButton>
</template>