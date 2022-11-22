<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
    props: ['post'],
    name: 'counter',
    computed: {
        count() {
            return this.$store.state.counter
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        }
    }
}
</script>



<template>
    <article :id="post.post_id">
        <section class="article-details"><img height="28" width="28" :src="post.post_profile_img"><span>{{ post.year }}</span></section>
        <section class="article-content"><img :src="post.post_img">
            <p>{{ post.post_text }}</p>
        </section>
        <section class="article-footer"><img class="likebtn" @click="increment()" height="64" width="64" :src="post.like_img">
            <p class="likes">{{ count }} likes</p>
        </section>
    </article>
</template>

<style scoped>
.likes{
    float: right;
}
</style>
