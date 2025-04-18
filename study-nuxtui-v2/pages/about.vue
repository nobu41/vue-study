<template>

  <ULink
    to="/"
    active-class="text-primary"
  >indexへ</ULink>

  <UCard class="mt-10">
    <template #header>
      <div class="flex justify-between">
        <h1>Welcome to Nuxt UI Starter</h1>
        <icon name="ic:round-menu-book" class="w-5 h-5" />
        <UIcon name="ic:outline-facebook" class="w-5 h-5" />
        <UIcon name="ic:twotone-bookmarks" class="w-5 h-5" />
        <!-- <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme> -->
      </div>

      <div class="flex justify-between">
        <h1>Welcome to Nuxt UI Starter</h1>
        <!-- <icon name="heroicons:lock-closed-20-solid" class="w-5 h-5" />
        <UIcon name="heroicons:moon" class="w-5 h-5" />
        <UIcon name="heroicons:clipboard-document-check-16-solid" class="w-5 h-5" /> -->
        <icon name="i-heroicons-lock-closed-20-solid" class="w-5 h-5" />
        <UIcon name="i-heroicons-moon" class="w-5 h-5" />
        <UIcon name="i-heroicons-clipboard-document-check-16-solid" class="w-5 h-5" />
      </div>

    </template>
    <UButton icon="ic:baseline-add-a-photo" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
  </UCard>
</template>