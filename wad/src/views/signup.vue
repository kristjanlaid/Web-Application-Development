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
      <button type="submit" @click="SignUp()">Signup</button>
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
      console.log(this.errors.length)
      if (this.errors.length) {
        return false;

      }
    },
    goToHomePage() {
      console.log("hello")
      return this.$router.push();
    },


    SignUp() {
      let valids = new Validation(this.email, this.password);

      this.errors = valids.checkValid();
      console.log(this.errors.length)
      if (this.errors.length) {
        return false;
      }


      var data = {
        username: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/usersignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include',
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    }, 
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