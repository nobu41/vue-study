<script setup>
    const error = 'エラー発生';
    const error2 =true;
    const error3 ='';
    const stock = 5;

    const error_vshow = true;
</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 条件分岐
--------------------------------- -->
<!-- v-if による分岐 -->
    <!--     
    <div v-if="条件式">内容</div>
    <div v-else-if="条件式">内容</div>
    <div v-else>内容</div>
    -->
    <div v-if="error">{{ error }}</div>
    <hr>

    <div v-if="error2">エラー発生2</div>
    <hr>

    <!-- error3 変数に何も入っていない場合にエラーはありませんと表示される -->
    <div v-if="error3">{{ error3 }}</div>
    <div v-else>エラー3はないです</div>
    <hr>

    <div v-if="stock > 5">在庫数に余裕があります</div>
    <div v-else-if = "stock === 0">売り切れです</div>
    <div v-else>在庫が少ないです</div>
    <hr>


<!-- v-show による制御 -->
    <!-- <div v-show="条件式">内容</div> -->
    <div v-show="error_vshow">エラー発生</div>
    <hr>
    <div v-show="stock > 3">stockが3より大きいです</div>


<!-- v-if, v-show の違い -->
<!-- 
    v-if：falseの場合DOM自体表示されない
    v-show：falseの場合diplay:none で非表示になる（処理の負荷低い=ドロップダウンメニューにおすすめ）
-->
</template>

<style>
/* スタイルを記述 */
</style>