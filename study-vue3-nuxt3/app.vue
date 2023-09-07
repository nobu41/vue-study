<template>
  <div>
    <h1>app.vue直書き</h1>

<!-- NuxtLayout タグを追加すると
    layouts ディレクトリの default.vue ファイルの内容が適用
    <NuxtLayout name="custom">とすればlayouts/custom.vue がデフォルトになる -->
    <NuxtLayout>
      <h2>NuxtLayoutタグ内に直書き</h2>

      <NuxtPage />
    <!-- トップページ(/)にアクセスで pages/index.vue を表示 -->
    <!-- /aboutにアクセスでpages/about.vue を表示 -->
    </NuxtLayout>

  </div>
</template>
