<script setup lang="ts">
defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  description?: string
  error?: string
  disabled?: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="space-y-1">
    <UInput
      v-bind="$attrs"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      :placeholder="placeholder"
      :disabled="disabled"
      :ui="{
        base: 'w-full',
        variant: 'outline',
        ring: error ? 'ring-red-500' : undefined
      }"
    />

    <p v-if="description && !error" class="text-sm text-gray-500">{{ description }}</p>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<style scoped lang="scss">
</style>