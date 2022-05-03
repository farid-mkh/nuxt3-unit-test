<template>
  <div class="container posts">
    <h2>Fetch data</h2>
    <button
      id="fetch-btn"
      :disabled="postStore.posts.length > 0"
      @click="handleFetch"
    >
      {{ postStore.posts.length > 0 ? "Fetched!" : "Fetch Post" }}
    </button>
    <div class="loading" v-if="loading">loading...</div>
    <template v-else>
      <Transition>
        <ul v-if="postStore.posts.length > 0">
          <li v-for="i in postStore.posts" :key="i">{{ i.title }}</li>
        </ul>
      </Transition>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { usePostStore } from "~~/store/posts";

const postStore = usePostStore();
const loading = ref(false);
const handleFetch = () => {
  loading.value = true;
  postStore.getPosts().finally(() => (loading.value = false));
};
</script>
