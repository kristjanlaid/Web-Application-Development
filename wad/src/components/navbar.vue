<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>

export default {
  data() {
    return {
      showDropdown: false
    }
  },
  methods:{
    logout() {
      fetch("http://localhost:3000/userlogout", {
        credentials: 'include'})
          .then((response) => response.json())
          .then((data) => {
            console.log('jwt removed');
            location.assign("/");
          })
          .catch((e) => {
            console.log("error logout");
          });
      }
  }
}

</script>



<template>
  <header>
  
    <div class="wrapper">
      <div class="navbar">
        <div class="dropdown profile-picture">
          <button id="dropdown-button" class="dropdownbtn" @click="() => showDropdown = !showDropdown"></button>
          <div id="user-dropdown" class="dropdown-content" :class="{ show: showDropdown }">
            <a href="#">John Doe</a>
            <a href="mailto:john.doe@ut.ee">john.doe@ut.ee</a>
            <RouterLink to="/login" @click="logout" >Log out</RouterLink>
          </div>
        </div>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signup">signup</RouterLink>
        <RouterLink to="/addPOST">addPOST</RouterLink>

      </div>
    </div>
  </header>
</template>


