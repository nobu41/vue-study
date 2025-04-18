<template>

  <ULink
    to="/about"
    active-class="text-primary"
  >aboutへ</ULink>


  <UCard class="mt-10">
    <template #header>
      <div class="flex justify-between">
        <h1>Welcome to Nuxt UI Starter</h1>
        <icon name="ic:round-house" class="w-5 h-5" />
        <UIcon name="ic:outline-hourglass-empty" class="w-5 h-5" />
        <UIcon name="ic:twotone-home-max" class="w-5 h-5" />
        <!-- <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme> -->
      </div>


      <div class="flex justify-between">
        <h1>Welcome to Nuxt UI Starter</h1>
        <!-- <icon name="heroicons:clipboard-20-solid" class="w-5 h-5" />
        <UIcon name="heroicons:bell-alert" class="w-5 h-5" />
        <UIcon name="heroicons:bolt-16-solid" class="w-5 h-5" /> -->
        <icon name="i-heroicons-clipboard-20-solid" class="w-5 h-5" />
        <UIcon name="i-heroicons-bell-alert" class="w-5 h-5" />
        <UIcon name="i-heroicons-bolt-16-solid" class="w-5 h-5" />
      </div>

    </template>
    <UButton icon="ic:baseline-add-a-photo" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
  </UCard>
</template>