function forgotPassword() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="forgottenUserPassword">
        <h3>Forgot your password?</h3>
        <h4>Please note that this is not functional!</h4>
        <p>Please enter your email below so we can send you instructions to reset your password.</p>

        <p>
            <label for="forgottenUserPasswordEmail">E-mail: </label>
            <input type="email" id="forgottenPasswordEmail">
        </p>

        <button onclick="forgottenPassword()" id="forgottenButton">Send e-mail</button>
    </div>
    `;
}
