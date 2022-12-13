<script>
export default {

    components: {
  },
   data: function() {
    return {
    posts:[ ]
    }
  },
  methods: {
  }, 
  mounted() {
        fetch('http://localhost:3000/posttable')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
}

</script>

<script setup>

</script>

<template>
  <body>
      <div class="flex-container flex-column">

      <div class="flex-container">
          <aside></aside>
          <Posts :posts="posts" />
          <aside></aside>
      </div>
      </div>
  </body>
</template>

<style scoped>

</style>