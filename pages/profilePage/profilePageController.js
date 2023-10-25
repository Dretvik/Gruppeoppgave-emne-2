function saveProfileInfo() {
    const user = model.app.loggedInUser;
    const newDescription = document.getElementById('editProfileDescriptionInput').value;
    const newName = document.getElementById('editProfileNameInput').value;
    const newImage = document.getElementById('imageInputField').value;

    // Hvis ikke noe er valgt vil den ikke gjøre noen endringer
    if (newDescription.trim() !== '') {
        user.aboutMe = newDescription;
    }
    if (newImage.trim() !== '') {
        user.profileImage = newImage;
    }
    if (newName.trim() !== ''){
        user.displayName = newName;
    }
    editProfileAddToFacMovie();
    profilePageView();
}

function editProfileAddToFacMovie(){
    const user = model.app.loggedInUser;
    const selectedMovies = [];
    const movieCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let checkbox of movieCheckboxes) {
        if (checkbox.checked) {
            selectedMovies.push(checkbox.value);
        }
    }
    if (selectedMovies.length > 0) {
        user.favMovies = selectedMovies;
    }
}

function generateFavMovieList(movieTitles) {
    let movieList = '';
    if (movieTitles.length > 0) {
        for (let movieTitle of movieTitles) {
            movieList += `
            <label for="${movieTitle}">${movieTitle}</label><br>
        `;
        }
    } 
    else {
        movieList = 'No favorite movies selected';
    }
    return movieList;
}

