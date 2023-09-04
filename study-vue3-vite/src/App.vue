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
<!-- オブジェクトのリスト化 -->
    <!-- オブジェクトの値をリスト化 -->
    <div v-for="value in user" :key="value">{{ value }}</div>
    <hr>
    
    <!-- プロパティ名と値を表示 -->
    <div v-for="(value, name) in user" :key="value">{{ name }}:{{ value }}</div>
    <hr>

    <!-- 複数の v-for を実行 -->
    <!-- 配列のオブジェクトの v-for とオブジェクトの v-for を組み合わせできる -->
    <div v-for="user in users" :key="user.id">
      <div v-for="(value, name) in user" :key="value">{{ name }}:{{ value }}</div>
    </div>

</template>

<style>
/* スタイルを記述 */
</style>