
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbarVue from './components/navbar.vue';
import footerVue from './components/footer.vue';
</script>



<template>
  <navbarVue></navbarVue>
  <!--to be able to do async-->
  <Suspense>
    <RouterView />
  </Suspense>
  <footerVue></footerVue>
</template>

<script>
import navbar from './components/navbar.vue';
import footer from './components/footer.vue';

  
  export default {
    components: {
      navbar: navbar,
      footer: footer,
    },
  };
</script>



<style>
#app{
  min-height: 100vh;
    display: flex;
    flex-direction: column;

}

</style>
