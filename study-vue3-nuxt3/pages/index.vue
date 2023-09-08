<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>
<script setup>
//ページに適用するレイアウトを動的に変更
  //"Update layout"ボタンをクリックすると custom レイアウトが適用
  function enableCustomLayout() {
    //レイアウトの適用に setPageLayout 関数を利用
    setPageLayout('custom');
  }
  //layout を false に設定=デフォルトのレイアウトが設定
  definePageMeta({
    layout: false,
  });

//useRoute 関数を利用して route.meta.layout の値を
//設定することでも動的に変更することは可能
// const route = useRoute();
// const enableCustomLayout = () => {
//   route.meta.layout = 'custom';
// };
// definePageMeta({
//   layout: false,
// });



</script>