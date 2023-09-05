<script setup>
  import { reactive } from 'vue';
  const form = reactive({
    message: 0,
  });

  const clickButton = () => {
    console.log(typeof form.message);
  };
</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 入力フォーム
--------------------------------- -->
<!-- 修飾子(Modifiers) -->
<!-- v-model は以下の修飾子を利用することで v-model の動作を変更できる -->


<!-- lazy：input 要素からカーソルを外した場合に変更が反映 -->
<input v-model.lazy="reactiveな変数名" />

<!-- trim：先頭や最後の空白を取り除く。文字の間にある空白は削除されない -->
<input v-model.trim="reactiveな変数名" />

<!-- number：JSでは input 要素に入力した値を取得すると文字列として扱うが
              number を設定するとvueが数値に変換して取得できるする。type が text の場合に利用することが可能 -->
<input v-model.number="reactiveな変数名" type="text" />


<!-- typeof  -->
    <!-- type の設定値が number の場合は number 修飾子はをつけなくても"number"と表示
     typeof は JavaScript の関数でタイプを確認するために利用できる。
     TypeScript でも型のチェックに利用する -->
<p>{{ form.message }}</p>
<input v-model="form.message" type="text" />
<div>
  <button @click="clickButton">Click</button>
</div>


</template>

<style>
/* スタイルを記述 */
</style>