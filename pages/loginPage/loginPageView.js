function loginPageView() {
    document.getElementById('app').innerHTML = /*HTML*/`
<div class="loginContainer">
    <h1>Welcome to PowerTurtle's rating page for movies!</h1>
    <div class="inputGroup">
        <label for="userName"> Username:</label>
        <input type="text" id="userName" placeholder= "Enter your username or email">
    </div>
    <div class="inputGroup">
        <label for="password"> Password:</label>
        <input type="text" id="password" placeholder="Fill in your password">
    </div>
        <button onclick="userLogin()">Log in</button>
        <button onclick="registrationPageView()">Register user</button>
        <button onclick="forgotPassword()">Forgot password?</button>
    <div id="errorMessage"></div>
</div>
    `; // Usikker på om errorMessage trenger å være med. Overskriften trenger ikke å være den som er nå.
}
