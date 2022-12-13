<script>

export default {
  methods: {
    addPost() {
      console.log("addpost button clicked");
      var data = {
        id: 1,
        post_text: this.addPostTextArea
      };
      fetch("http://localhost:3000/posttable", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });

    }
  }
}
</script>

<template>
  <body>
    <div class="flex-container flex-column">
      <div class="flex-container">
        <bside></bside>
        <form class="flex-container flex-column justify-space" id="addPost-form" action="/">
          <div>
            <label for="addPostTextArea">Post body</label><br>
            <textarea id="addPostTextArea" placeholder="add text here!" name="addPostTextArea"></textarea>
          </div>
          <div>
            <label for="inFile">Select file</label><br>
            <input type="file" id="inFile" name="inFile"><br>
          </div>
          <div>
            <input class="submitButton" type="submit" value="Create Post" @click="addPost">
          </div>
        </form>
        <bside></bside>
      </div>
    </div>
  </body>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
