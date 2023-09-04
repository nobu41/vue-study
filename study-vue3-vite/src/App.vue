<script setup>
    const languages = ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Rust', 'Go'];

    const users = [
      { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', admin: false },
      { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
    ]

</script>

<template>
  <h1>Vue 3 入門</h1>
<!-- ---------------------------------
 リスト表示
--------------------------------- -->
<!-- 配列のリスト表示 -->
    <p>{{ languages[0] }}</p>
    <p>{{ languages[1] }}</p>
    <p>{{ languages[2] }}</p>
    <hr>

    <!-- 
    <p v-for="language in 変数名" v-bind:key="language">{{ language }}</p>
    key 属性に一意の値を設定する必要がある -->
    <p v-for="language in languages" v-bind:key="language">{{ language }}</p>
    <hr>

<!-- オブジェクト配列のリスト表示 -->
    <p v-for="user in users" :key="user.id">{{ user }}</p>
    <hr>
    
    <!-- オブジェクトを v-for でリスト化 -->
    <div v-for="user in users" :key="user.id">
      {{ user.id }}:
      {{ user.name }}:
      {{ user.email}}
    </div>
    <hr>
    
    <!-- ul, li タグを利用したい場合 -->
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}:
        {{ user.name }}:
        {{ user.email }}
      </li>
    </ul>

    <!-- table で表示させたい場合 -->
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>ユーザ名</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <hr>

    <!-- v-for で index を表示 -->
    <!-- 配列の要素の番号である index(0はじまり) を取得することで現在何番目の要素なのか確認 -->
    <div v-for="(user, index) in users" :key="user">
      配列番号{{ index }}：
      {{ user.id }}{{ user.name }}{{ user.email }}
    </div>
    <hr>

    <!-- template タグでも利用できる -->
    <!-- template タグ自体はなくなる -->
    <template v-for="user in users" :key="user.id">
      {{ user.id }}-{{ user.name }}-{{ user.email }}
    </template>
    <hr>

    <!-- 
      v-for では"in"を使っていたが"of"も利用することができる
      in でも of でも表示内容は変わらない -->
      <div v-for="user of users" :key="user.id">{{ user.name }}</div>

</template>

<style>
/* スタイルを記述 */
</style>