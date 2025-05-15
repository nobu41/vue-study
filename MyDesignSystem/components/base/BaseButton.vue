<template>
    <UButton
      :color="presetColor"
      :variant="presetVariant"
      :size="size"
      :loading="loading"
      class="rounded-xl font-semibold"
      v-bind="$attrs"
    >
      <slot />
    </UButton>
  </template>
  
  <script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      preset?: 'primary' | 'secondary' | 'ghost'
      size?: string
      loading?: boolean
    }>(),
    {
      preset: 'primary',
      size: 'md',
      loading: false
    }
  )
  
  const presetColorMap: Record<string, string> = {
    primary: 'primary',
    secondary: 'pink',
    ghost: 'blue'
  }
  
  const presetVariantMap: Record<string, string> = {
    primary: 'solid',
    secondary: 'solid',
    ghost: 'ghost'
  }
  
  const presetColor = presetColorMap[props.preset]
  const presetVariant = presetVariantMap[props.preset]
  </script>