<template>
<div class="container">
  <form class="signup-form" @submit.prevent="onSignup">
    <div class="signup-row">
      <label class="signup-label">Email</label>
      <input type="text" class="signup-input" placeholder="Email" v-model="email">
      <div class="error" v-if="errors.email">
        {{errors.email}}
      </div>
    </div>
    <div class="signup-row">
      <label class="signup-label">Password</label>
      <input type="password" class="signup-input" placeholder="Password" v-model="password">
      <div class="error" v-if="errors.password">
        {{errors.password}}
      </div>
    </div>

    <div class="signup-submit">
      <button type="submit">Signup</button>
    </div>
  </form>
</div>
</template>

<script>
import Validation from "@/services/Validation";

import router from "@/router";

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: [],
    };
  },
  methods: {
    onSignup() {
      let valids = new Validation(this.email, this.password);

      this.errors = valids.checkValid();

      if (this.errors.length) {
        return false;

      }
    },
    goToHomePage() {
      return router.push({name: 'home'});
    }
  }

}
</script>

<style scoped>
.container{
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>