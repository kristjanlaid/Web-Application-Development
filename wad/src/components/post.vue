<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
    props: ['post'],
}
</script>



<template>
    <article>
        <section class="article-details"><img height="28" width="28" :src="post.post_profile_img"><span>{{ post.year }}</span></section>
        <section class="article-content"><img :src="post.post_img">
            <p>{{ post.post_text }}</p>
        </section>
        <section class="article-footer"><img height="64" width="64" :src="post.like_img"></section>
    </article>
</template>
