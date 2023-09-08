<template>

<!-- レイアウトファイルは pages/about.vue ファイルに直接
     NuxtLayout コンポーネントを利用することもできる -->
<!-- name props にレイアウトファイル名を設定もできる -->

<!-- page ファイルで NuxtLayout を利用する場合は
     NuxtLayout タグがルートエレメントにならないようにする以下はルートエレメントは div -->
    <div>
      <NuxtLayout style="test">
        <h1>About Page</h1>
        <h3>About Page(pages/about.vue)</h3>
        <p>layouts/default.vue適用</p>
      </NuxtLayout>
    </div>


</template>