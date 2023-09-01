<script setup>
  const activeColor = 'red';
  const fontStress = '900';

  const styleObjcet = {
    color: 'red',
    fontWeight: 900,
  };

  const styleObjcet2 = 'color:red;font-weight:900';

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

  <!-- style 属性の設定 -->
  <!-- 変数 activeColor, fontStress を定義して v-bind を設定した style 属性の中で利用 -->
  <p :style="{ color: activeColor, fontWeight: fontStress }">
    v-bindの設定方法の確認
  </p>

  <!-- 通常の style のプロパティを利用した場合はシングルクォーテーションを使う -->
  <p :style="{ color: activeColor, 'font-weight': fontStress }">
    v-bindの設定方法の確認
  </p>

  <!-- 変数側で style を設定もできる。変数側でスタイルを設定することで template タグがすっきりする -->
  <p :style="styleObjcet">v-bindの設定方法の確認</p>

  <!-- 通常の style 属性のように記述することもできます。 -->
  <p :style="styleObjcet2">v-bindの設定方法の確認</p>



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