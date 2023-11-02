function registrationPageView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="registerUser">
        <div class="registerUserHeader">
            <h3>Create an account</h3>
        </div>

        <div class="registerUserGroup">
            <label for="newUsernameInput">Username: </label>
            <input type="text" id="newUsername">
        </div>
        
        <div class="registerUserGroup">
            <label for="newUserEmail">E-mail: </label>
            <input type="email" id="newEmail">
        </div>
        
        <div class="registerUserGroup">
            <label for="newPasswordInput">Password: </label>
            <input type="text" id="newPassword">
        </div>
    </div>

        <button onclick="registerUser()" id="submitButton">Register</button>
        <button onclick="loginPageView()" id="backButton">Back</button>
    `;
}
