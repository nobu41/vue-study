<script setup>
    //配列
    // const users = [
    //   { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
    //   { id: 2, name: 'Jane Doe', email: 'jane@example.com', admin: false },
    //   { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
    // ]

    //オブジェクト
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john@test.com',
      admin: true,
    };

    const users = [
      { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', admin: false },
      { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
    ];

</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 リスト表示
--------------------------------- -->
<!-- リストと分岐 -->
<!-- v-for ディレクティブと v-if ディレクティブを利用することで条件が一致した情報のみ表示できる -->
    <!-- admin の値が false のユーザのみ表示 -->
    <div v-for="user in users" :key="user.id">
      <div v-if="!user.admin">{{ user.name }}</div>
    </div>



</template>

<style>
/* スタイルを記述 */
</style>