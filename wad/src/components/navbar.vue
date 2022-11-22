<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>

export default {
  data() {
    return {
      showDropdown: false
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
                <a href="login.html">Log out</a>
            </div>
        </div>

          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/signup">signup</RouterLink>
          <RouterLink to="/addPOST">addPOST</RouterLink>
        </div>
    </div>
  </header>
</template>


