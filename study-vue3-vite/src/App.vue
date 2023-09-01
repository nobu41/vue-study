<script setup>
  const isActive = true;
  const isActive2 = 'active2';
  const isBlack = true;

  const link = 'https://google.com';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!--Binding(バインディング)
    html タグの属性の設定が可能（例：hrefなど）
    <a v-bind:href="変数名">リンク名</a> -->
  <a v-bind:href="link">Google</a>

  <!--
  v-bind を頻繁に利用する例として以下がある。
  動的に表示させる画像を変更したい場合、条件によってボタンを押させないといったことが
  v-bind ディレクティブを利用することで実装できます。
  ・img タグの src 属性
  ・button タグの disabled 属性
  -->


  <!-- class 属性 -->
  <p class="active">v-bindの設定方法の確認</p>


  <!-- オブジェクトのプロパティに class 名を設定し、
    値に変数名または true, false を利用することで class を適用するかどうかを設定
        v-bind:class="{class名: 変数名 or (true or false)}" -->
  <p class="underLine" :class="{ active: isActive }">v-bindの設定方法の確認</p>


  <!-- underLine と active クラスを isActive が true の場合に適用したい場合 -->
  <p :class="{ 'underLine active': isActive }">v-bindの設定方法の確認</p>


  <!-- class の中には複数の class を設定できる -->
  <p class="underLine" :class="{ active: isActive, back: isBlack }">
    v-bindの設定方法の確認
  </p>

  <!-- v-bind による複数の class の適用 -->
  <p :class="{ 'underLine active': isActive2, back: isBlack }"></p>


  <!-- v-bind ディレクティブを設定した class の中では論理演算子(&&)を利用して設定できる
    v-bind:class="{変数名　&& 'class名'}"
    isActive が true の時に active クラスが適用
   -->
   <p :class="isActive && 'active'">v-bindの設定方法の確認</p>


  <!-- 利用頻度は低いが論理演算子(||)も利用できる。
    変数が false の時に class が適用されます。
    v-bind:class="{変数名　|| 'class名'}"
    -->

  <!-- 三項演算子を利用できる。
    isActive が true の場合は active, false の場合は underLine が適用 -->
  <p :class="isActive ? 'active' : 'underLine'">v-bindの設定方法の確認</p>


  <!-- 変数名を設定して変数名に設定している class を適用できる -->
  <p :class="isActive2">v-bindの設定方法の確認</p>



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