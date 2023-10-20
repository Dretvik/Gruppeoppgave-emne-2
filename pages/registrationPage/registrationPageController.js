function registerUser() {
    const username = document.getElementById('newUsername');
    const password = document.getElementById('newPassword');
    const email = document.getElementById('newEmail');

if (email.includes("@")) {
    const newUser = {
        userName: username,
        password: password,
        emailAdress: email,
    };

    model.data.username.push(newUser);
    loginpageview();
    } else {
     alert("Please enter valid email address.")
    }

}