<script setup>
  const isActive = 'active';
  const isBlack = 'back';

</script>

<template>
  <h1>Vue 3 入門</h1>
  <!--Binding(バインディング)
    html タグの属性の設定が可能（例：hrefなど）
    <a v-bind:href="変数名">リンク名</a> -->

  <!--
  v-bind を頻繁に利用する例として以下がある。
  動的に表示させる画像を変更したい場合、条件によってボタンを押させないといったことが
  v-bind ディレクティブを利用することで実装できます。
  ・img タグの src 属性
  ・button タグの disabled 属性
  -->


  <!-- 複数の class を適用したい場合には配列を利用 -->
  <p :class="[isActive, isBlack]">v-bindの設定方法の確認</p>

  <!-- 配列の中でオブジェクトを利用することもできる -->
  <p :class="[{ active: 'isActive' }, isBlack]">v-bindの設定方法の確認</p>

  <!-- 配列の中で演算子を利用することもできる -->
  <p :class="[isActive && 'active', isBlack]">v-bindの設定方法の確認</p>
  
  <p :class="[isActive ? 'active' : 'underLine', isBlack]">
  v-bindの設定方法の確認
  </p>


</template>

<style>
  .active {
    color: red;
    font-weight: 900;
  }
  .underLine {
    text-decoration: underline;
  }
  .back {
    background-color: black;
  }
</style>