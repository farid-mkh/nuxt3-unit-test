<template>
  <div id="app">
    <div class="row">
      <div class="col-12">
        <div class="container">
          <h1>Nuxt Unit Test!</h1>
          <input data-testid="first-input" />
          <button @click="handleCounter" id="counter">increase</button>
          <span class="counter-space">{{ count }}</span>
        </div>
      </div>
      {{ data ? data : "...." }}
      <div class="col-12">
        <FetchPosts />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data } = useApi();
const count = ref<number>(0);
function handleCounter() {
  count.value++;
}
</script>
<style>
body {
  margin: 0;
}
#app {
  background: #353535;
  font-family: "Courier New", Courier, monospace;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.container {
  border: 1px solid #444444;
  height: fit-content;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}
.mx-auto {
  margin: 0 auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 70%;
}
.col-12 {
  max-width: 100%;
  flex: 0 0 100%;
}
input {
  height: 35px;
  border: none;
  border-radius: 5px;
}
button {
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
}
.counter-space {
  display: block;
  background: #444444;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
}
ul {
  height: 200px;
  overflow: auto;
}
li {
  list-style: none;
  background: #444444;
  padding: 5px;
  margin: 5px;
}
/* transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>