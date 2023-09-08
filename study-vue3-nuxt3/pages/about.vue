<template>

<!-- レイアウトファイルは pages/about.vue ファイルに直接
     NuxtLayout コンポーネントを利用することもできる -->
<!-- name props にレイアウトファイル名を設定もできる -->

<!-- page ファイルで NuxtLayout を利用する場合は
     NuxtLayout タグがルートエレメントにならないようにする以下はルートエレメントは div -->
    <div>
      <!-- name props を追加し custom レイアウト設定後、
          　custom レイアウトのみ反映させたい場合は 
            definePageMeta 関数で layout を false に設定
            app.vue ファイルで適用されている default レイアウトは適用されず、
            custom レイアウトのみ適用されます。 -->
      <NuxtLayout name="custom">
        <h1>About Page</h1>
        <h3>About Page(pages/about.vue)</h3>
        <p>layouts/default.vue適用</p>
      </NuxtLayout>
    </div>


</template>

<script setup>
  definePageMeta({
    layout: false,
  });
</script>