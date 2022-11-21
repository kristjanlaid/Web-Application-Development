<template>
    <body>
<header class="header">
    <img class="user" src="user.png">
    <div class="header-text">Home</div>
</header>
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
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
img{
    align-items: center;
    width: 50%;
}
</style>