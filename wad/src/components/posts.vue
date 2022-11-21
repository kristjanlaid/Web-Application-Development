<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Post from "./post.vue";
</script>

<script>
export default {
    props: ['posts'],
    components: {
      Post
    },
}

</script>

<script>

</script>

<template>
    <main class="flex-container flex-column justify-space" id="posts">
        <Post v-for="post in posts" :key="post.post_id" :post="post" />
    </main>
    
    <div>{{ JSON.stringify($store.state.json_data) }}</div>
</template>
