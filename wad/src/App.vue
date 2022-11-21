
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbarVue from './components/navbar.vue';
</script>



<template>
  <!-- <header>
  
    <div class="wrapper">
        <div class="navbar">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/addPOST">addPOST</RouterLink>
          <RouterLink to="/homepage">homepage</RouterLink>
        </div>
    </div>
  </header> -->
  <navbarVue></navbarVue>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<script>
  import navbar from './components/navbar.vue';
  
  export default {
    components: {
      navbar: navbar,
    },
  };
</script>



<style>


</style>
