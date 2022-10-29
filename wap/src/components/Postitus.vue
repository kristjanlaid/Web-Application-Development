<script setup>
defineProps({
    id: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    contentImg: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <article>
        <section class="article-details">
            <img :src="profileImg" width="28" height="28" alt="" />
            <span>{{ date }}</span>
        </section>
        <section class="article-content">
            <img :src="contentImg" alt="">
            <p>{{ text }}</p>
        </section>
        <section class="article-footer">
            <img src="like.png" width="64" height="64" alt="">
        </section>
    </article>
</template>

<style scoped>

</style>