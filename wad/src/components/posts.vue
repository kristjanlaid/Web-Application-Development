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
        resetLike() {
            console.log("resetLikes pressed!")
        },
        LogIn() {
            var data = {
                id: this.id
            };
            // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
            fetch("http://localhost:3000/posttable", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                //credentials: 'include', //  Don't forget to specify this if you need cookies
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    //this.$router.push("/");
                    //location.assign("/");
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error");
                });
        },
        DeleteAll() {
            fetch('http://localhost:3000/posttable', { method: 'DELETE' })
                .then(() => this.status = 'Delete successful');
            // force vue to reload page
            window.location.reload();
        }
    }
}
</script>

<template>
    <main class="flex-container flex-column justify-space" id="posts">
        <Post v-for="post in posts" :key="post.post_id" :post="post"/>
        <button class="reset" @click="resetLike" ref="resetButton">reset likes</button>
        <button class="delete" @click="DeleteAll()">delete posts</button>
    </main>

    <!-- <div>{{ JSON.stringify($store.state.json_data) }}</div> -->
</template>

<style>
.reset{
    margin-bottom: 10px;
}
</style>
