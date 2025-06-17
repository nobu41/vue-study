<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
    <div class="max-w-screen-xl mx-auto px-4 py-1.5 flex items-center justify-between">
      <h1 class="text-lg font-semibold text-gray-800">ゲストページ</h1>
      <nav>
        <ul class="flex items-center gap-4 text-sm text-gray-600">
          <li><NuxtLink to="/" class="hover:text-blue-600">ホーム</NuxtLink></li>
          <li><NuxtLink to="/login" class="hover:text-blue-600">ログイン</NuxtLink></li>
          <li><NuxtLink to="/register" class="hover:text-blue-600">新規登録</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped lang="scss">
</style>