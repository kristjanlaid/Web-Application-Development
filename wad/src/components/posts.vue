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
        reset() {
            this.$store.commit('reset')
        }
        
    }
}

</script>

<script>

</script>

<template>
    <main class="flex-container flex-column justify-space" id="posts">
        <Post v-for="post in posts" :key="post.post_id" :post="post" />
        <button class="reset" @click="reset()">reset likes</button>
    </main>

    <!-- <div>{{ JSON.stringify($store.state.json_data) }}</div> -->
</template>

<style>
.reset{
    margin-bottom: 10px;
}
</style>
