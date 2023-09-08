<template>
  <nav>
<!--     
    <a href="/">Home2</a>
    <a href="/about">About2</a>
 -->
<!-- NuxtLink：ページの中で更新が必要な箇所だけ更新が行われる -->
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>

<!-- 外部のサイトの場合は通常の a タグのように動作target="_blank"も使える  -->
    <NuxtLink href="https://google.com" target="_blank">
      Google
    </NuxtLink>

<!-- hrefも使える -->
    <NuxtLink href="/about">test</NuxtLink>
  </nav>
</template>