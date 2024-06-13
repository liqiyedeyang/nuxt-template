<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import "@unocss/reset/tailwind-compat.css"; //重置html标签默认样式
</script>

<style>
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}
</style>
