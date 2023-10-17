function registrationPageView() {
    // TOR: Is it ok to use form here?
    document.getElementById('app').innerHTML = /*HTML*/`
    <form id="registerUser">
        <h3>Create an account</h3>
        <p>
            <label for="newUsernameInput">Username: </label>
            <input type="text" id="newUsername" autofocus>
        </p>

        <p>
            <label for="newUserEmail">E-mail: </label>
            <input type="email" id="newEmail">
        </p>

        <p>
            <label for="newPasswordInput">Password: </label>
            <input type="text" id="newPassword">
        </p>

        <button type="submit" id="submitButton">Register</button>
    </form>
    `;
}