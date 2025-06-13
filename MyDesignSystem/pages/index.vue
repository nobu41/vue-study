<script setup lang="ts">
const form = reactive({
  name: '',     // BaseInput 用
  agree: false, // BaseCheckbox 用
})
const errors = reactive({
  name: '',
  agree: '',
})
</script>

<template>
  <div class="my-10">
    <UBadge>Badge</UBadge>
    <div class="space-y-2">
      <BaseButtonTest variant="primary">プライマリボタン</BaseButtonTest>
      <BaseButtonTest variant="secondary">セカンダリボタン</BaseButtonTest>
      <BaseButtonTest variant="danger">成功アクション</BaseButtonTest>
      <BaseButtonTest>エラー通知</BaseButtonTest>
    </div>

    <!-- <BaseInput
  v-model="form.name"
  label="名前"
  placeholder="山田 太郎"
  :error="errors.name"
/> -->
  </div>

  <div class="my-10">
    <UBadge>Badge</UBadge>

    <div class="space-y-2">
      <BaseButton preset="primary">プライマリボタン</BaseButton>
      <BaseButton preset="secondary">セカンダリボタン</BaseButton>
      <BaseButton preset="ghost">成功アクション</BaseButton>
      <BaseButton>エラー通知</BaseButton>
    </div>
  </div>

    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->

</template>
