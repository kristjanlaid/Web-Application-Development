<template>
    <body>
<!--<header class="header">
    <img class="user" src="user.png">
    <div class="header-text">Home</div>
</header>-->
    <div class="container">

        <div class="login-form">Welcome to PostIt
            <div class="acc">Create and account</div>
                <div>or</div>
                <div>Please log in</div>

        </div>
        <div class="login-item">
            <form action="index.html" class="form form-login">
                <div class="form-field">
                    <label class="" for="login-username"></label>
                    <input id="login-username" type="text" class="form-input" placeholder="Email" required>
                </div>

                <div class="form-field">
                    <label class="lock" for="login-password"></label>
                    <input id="login-password" type="password" class="form-input" placeholder="Password" required>
                </div>

                <div class="form-field">
                    <input type="submit" value="Log in">
                </div>
                <div class="forget">Forget password</div>
            </form>
        </div>
    </div>

</body>
</template>

<style scoped>

.header {
    height: 2.3em;
    font-size: 32px;
    background: gray;
    border-radius: 10px;
}

.header-text {
    padding: 0.5em 0 0 1em;
}

.user {
    width: 2em;
    float: right;
    padding: 5px;
}

.container {
    background:lightgray;
    border-radius: 10px;
    width:450px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 5em;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-evenly;
}

.label{
    text-align: justify;
}

.login-form{
    font-family: "sans-serif";
    font-size:20px;
    text-align: center;
    padding: 20px 20px 0;
    margin:0;
    font-weight: bold;
}

.addPost-form{
    font-family: "sans-serif";
    font-size:20px;
    text-align: center;
    padding: 20px 20px 0;
    margin:0;
    font-weight: bold;
}

.addPost-form textarea {
    resize: none;
    flex-grow: 1;
}

.submitButton{
    background-color: blue;
    color: white;
    margin-bottom: 10px;
}

.acc {
    font-family: "sans-serif";
    font-size:20px;
    text-align: center;
    padding: 20px 20px 0;
    margin:0;
    color: blue;
}

.forget {
    font-family: "sans-serif";
    font-size:20px;
    text-align: center;
    margin:0;
    color: blue;
    padding: 0 0 10px 0;
}

.login-item {
    color: #ffff;
    padding:25px 25px 0;
    border-radius: 3px;
}

input {
    border: 0;
}

.form input[type="password"], .form input[type="text"], .form input[type="submit"] {
    width: 100%;
}

.form-login input[type="submit"] {
    background-color: blue;
    color: #fff;
}
.form-login input[type="submit"]:hover {
    background-color: darkblue;
}
.form-field {
    display: flex;
    margin-bottom: 2rem;
}



</style>