<template>
<body>
    <!--
        <div class="flex-container">
            <form id="addPost-form">
                <div class="addPost-form">
                    <label for="addPostTextArea">Post body</label>
                    <textarea id="addPostTextArea" placeholder="add text here!" ></textarea>
                </div>
                <div class="addPost-form">
                    <label for="chooseFileBttn">Select file</label>
                    <input id="chooseFileBttn" type="submit" value="Choose file">
                </div>
                <div class="addPost-form">
                    <input class="submitButton" type="submit" value="Create Post">
                </div>
            </form>
        </div>
    //-->
        <div class="flex-container flex-column">
            <header>
                <nav>
                    <div class="profile-picture">
                        <img class="logo" src="user.png" width="64" height="64" alt=""/>
                    </div>
                    <ul class="linkcontainer">
                        <li><a href="index.html">Home</a></li>
                    </ul>
                </nav>
            </header>

            <div class="flex-container">
                <form id="addPost-form">
                    <div>
                        <label for="addPostTextArea">Post body</label>
                        <textarea id="addPostTextArea" placeholder="add text here!" ></textarea>
                    </div>
                    <div>
                        <label for="chooseFileBttn">Select file</label>
                        <input id="chooseFileBttn" type="submit" value="Choose file">
                    </div>
                    <div>
                        <input class="submitButton" type="submit" value="Create Post">
                    </div>
                </form>
            </div>

            <!--<div class="flex-container">
                <bside></bside>
                <main class="flex-container flex-column justify-space" id="posts">
                </main>
                <bside></bside>
            </div>//-->

            <!--<footer>
                <p id="para1">footer area</p>
            </footer>-->
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
