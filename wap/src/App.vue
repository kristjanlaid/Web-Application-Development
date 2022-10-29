<script setup>
import Postitus from './components/Postitus.vue'

</script>

<script>
const posts = await fetch("./public/data.json").then(res => res.json());
console.log(posts);

</script>

<template>
  <div class="flex-container flex-column">
    <header>
      <nav>
        <div class="profile-picture">
          <img class="logo" src="user.png" width="64" height="64" alt="" />
        </div>
        <ul class="linkcontainer">
          <li><a class="active" href="#">Home</a></li>
          <li><a href="addPOST.html">addPost</a></li>
        </ul>
      </nav>
    </header>

    <div class="flex-container">
      <aside></aside>
      <main class="flex-container flex-column justify-space">
        <Postitus v-for="post in posts" :id="post.post_id" :text="post.post_text" :date="post.year" :contentImg="null"
          :profileImg="post.post_profile_img" />
      </main>
      <aside></aside>
    </div>

    <footer>
      <p id="para1">footer area</p>
    </footer>
  </div>
</template>

<style scoped>
</style>
