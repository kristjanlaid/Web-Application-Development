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
    name: 'counter',
    methods: {
      resetLike(){
        console.log("resetLikes pressed!")
      }
  }
}
</script>

<template>
    <main class="flex-container flex-column justify-space" id="posts">
        <Post v-for="post in posts" :key="post.post_id" :post="post"/>
        <button class="reset" @click="resetLike" ref="resetButton">reset likes</button>
    </main>

    <!-- <div>{{ JSON.stringify($store.state.json_data) }}</div> -->
</template>

<style>
.reset{
    margin-bottom: 10px;
}
</style>
