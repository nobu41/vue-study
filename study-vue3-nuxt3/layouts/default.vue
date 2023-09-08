<template>
  <div>
    <!-- Auto Imports -->
    <!-- ネストされているコンポーネントファイルは
         ディレクトリとファイル名でインポートできる
         以下は
         components/nav/Navbar.vue = NavNavbar  -->
    <NavNavbar />

    <!-- nav/NavBar.vue の場合はNavNavBar としてもだめ
         NavNavBar では、nav/nav/Bar.vue ファイルを
         import していることになる -->

    <slot />
  </div>
</template>