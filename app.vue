<template>
  <div>
    Hello Nuxt!
    <input data-testid="first-input" />
    <button @click="handleCounter" id="counter">Hello</button>
    <span>{{ count }}</span>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
const count = ref(0);
function handleCounter() {
  count.value++;
}
</script>