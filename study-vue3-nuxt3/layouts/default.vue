<template>
  <div>
    <!-- 名前付き slot を追加。
         slot タグに name props を任意の名前で追加 -->
    <slot name="header" />
    <nav>こにナビゲーションバーを入れる</nav>
    <slot />
  </div>
</template>