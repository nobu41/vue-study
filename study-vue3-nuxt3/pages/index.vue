<template>
  <div>
    <!-- NuxtLayoutのname に default を設定 -->
    <NuxtLayout name="default">
      <!-- template タグに#header を設定　
           名前付き slot を設定した場所に
           表示させたい内容を記述 -->
      <template #header>ヘッダー</template>
      <h1>Main Page</h1>
    </NuxtLayout>

<!-- NuxtLayout に明示的に name props で default を設定しない場合は
     definePageMeta 関数により default のレイアウトが適用されないため
     name の設定が必須。NuxtLayout タグがない場合は、エラーになる -->

  </div>
</template>

<script setup>
  definePageMeta({
    layout: false,
  });
</script>