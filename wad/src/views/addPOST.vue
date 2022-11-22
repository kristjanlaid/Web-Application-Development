<script>
  function addPost(){
    console.log("addpost")
  }

  addPost();
</script>

<template>
<body>

        <div class="flex-container flex-column">
            <div class="flex-container">
              <bside></bside>
              <form class="flex-container flex-column justify-space" id="addPost-form" >
                  <div>
                      <label for="addPostTextArea">Post body</label>
                      <textarea id="addPostTextArea" placeholder="add text here!" ></textarea>
                  </div>
                  <div>
                      <label for="chooseFileBttn">Select file</label>
                      <input id="chooseFileBttn" type="file" value="Choose file">
                  </div>
                  <div>
                      <input class="submitButton" type="submit" value="Create Post">
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
