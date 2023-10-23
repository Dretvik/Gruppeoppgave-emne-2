 function registerUser() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const email = document.getElementById('newEmail').value;

if (email.includes("@")) {
    const newUser = {
        userName: username,
        password: password,
        emailAdress: email,
        favGenre: [],
        favMovies: [],
        myRatedMovies: [],
        aboutMe: '',
        profileImage: './img/profileImages/emptyUser.jpg',
    };

    model.data.users.push(newUser);
    loginPageView();
    } else {
     alert("Please enter valid email address.")
    }

}