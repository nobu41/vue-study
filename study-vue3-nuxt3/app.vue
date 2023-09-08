<!-- app.vue ファイルを必須ではないので削除できる
app.vue ファイルが存在しない場合には
自動でデフォルトのレイアウトが適用される -->
<template>
  <div>
    <h1>app.vue直書き</h1>

<!-- NuxtLayout タグを追加すると
    layouts ディレクトリの default.vue ファイルの内容が適用 -->

<!-- <NuxtLayout name="custom">とすればlayouts/custom.vue がデフォルトになる -->
<!-- <NuxtLayout :name="layout"> bind  name Propsで動的にレイアウトを変更できる-->
    <NuxtLayout :name="layout">
      <NuxtPage />
    <!-- トップページ(/)にアクセスで pages/index.vue を表示 -->
    <!-- /aboutにアクセスでpages/about.vue を表示 -->
    </NuxtLayout>

  </div>
</template>

<script setup>
//bind  name Propsで動的にレイアウトを変更
//admin が true の場合は custom.vue ファイル
//admin が false の場合は default.vue ファイルが適用
//const admin = true;
//const layout = admin ? 'custom' : 'default';
</script>
