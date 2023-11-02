function forgotPassword() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="forgottenUserPassword">
        <h3>Forgot your password?</h3>
        <p>Please enter your email below so we can send you instructions to reset your password.<br>
        (Please note that this is not functional so no e-mail will be sent!)</p>
        <p>
            <label for="forgottenUserPasswordEmail">E-mail: </label>
            <input type="email" id="forgottenPasswordEmail">
        </p>
    </div>

    <button onclick="forgottenPassword()" id="forgottenButton">Send e-mail</button>
    <button onclick="loginPageView()" id="forgottenBackButton">Back</button>
    `;
}
