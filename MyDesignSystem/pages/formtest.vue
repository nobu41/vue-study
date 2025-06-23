<script setup>
import { ref } from 'vue'

// 入力値
const name = ref('')
const email = ref('')
const message = ref('')

// 送信ボタンが押されたかどうか
const submitted = ref(false)

const onSubmit = () => {
  submitted.value = true

  // バリデーション（未入力チェック）
  if (!name.value || !email.value || !message.value) return

  // モック送信処理（実際はAPI送信など）
  alert(`送信されました！\n\nお名前：${name.value}\nメール：${email.value}\n内容：${message.value}`)
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <!-- お名前 -->
    <div>
      <label>お名前</label><br />
      <input v-model="name" type="text" placeholder="例：山田太郎" class="border p-2 w-full" />
      <p v-if="submitted && !name" class="text-red-500 text-sm">名前を入力してください</p>
    </div>

    <!-- メールアドレス -->
    <div>
      <label>メールアドレス</label><br />
      <input v-model="email" type="email" placeholder="例：example@mail.com" class="border p-2 w-full" />
      <p v-if="submitted && !email" class="text-red-500 text-sm">メールアドレスを入力してください</p>
    </div>

    <!-- お問い合わせ内容 -->
    <div>
      <label>お問い合わせ内容</label><br />
      <textarea v-model="message" placeholder="お問い合わせ内容をご記入ください" class="border p-2 w-full"></textarea>
      <p v-if="submitted && !message" class="text-red-500 text-sm">お問い合わせ内容を入力してください</p>
    </div>

    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">送信</button>
  </form>
</template>
