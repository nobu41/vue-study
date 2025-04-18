<script setup lang="ts">
// const items = [
//   [
//     {
//       label: '設定',
//       icon: 'i-heroicons-cog-6-tooth',
//       click: () => alert('設定を開きます'),
//     },
//     {
//       label: 'ログアウト',
//       icon: 'i-heroicons-arrow-right-on-rectangle',
//       click: () => alert('ログアウトします'),
//     },
//   ],
// ]
</script>

<template>
  <UContainer>
  <NuxtPage />
    <!-- <ULink
    to="/about"
    active-class="text-primary"
  >
    Link
  </ULink>
  
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <icon name="ic:round-house" class="w-5 h-5" />
          <UIcon name="ic:outline-hourglass-empty" class="w-5 h-5" />
          <UIcon name="ic:twotone-home-max" class="w-5 h-5" />
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
      <UButton icon="heroicons:home" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
    </UCard>
    <UTooltip
  text="これはテレポートされたツールチップです"
  :popper="{ strategy: 'absolute' }"
  teleport="body"
>
  <UButton class="mb-4">ツールチップ付きボタン</UButton>
</UTooltip> -->
  </UContainer>
</template>
