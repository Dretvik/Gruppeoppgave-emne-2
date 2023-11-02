function profilePageView() {
    const user = model.app.loggedInUser;
    const favMovies = user.favMovies;
    const favGenre = user.favGenre;
    const ratedMovies = user.myRatedMovies;
    const ratedMoviesList = ratedMoviesOfUser(ratedMovies);
    const movieList = generateFavoriteMovieList(favMovies);
    const genreList = generateFavGenreList (favGenre);
    document.getElementById('app').innerHTML = menuButtonAndSearchBar + /*HTML*/`
    <button onclick="editProfilePageView()" class="editProfileButtons">Edit Profile Info</button>
    <h2>Hi <span class="usernameProfilePage">${user.displayName}</span>! Welcome to your profile page.</h2>
    <div id="profilePageContainer">
        <div class="profileInfo" class="profilePageGridAreaA">
            <img class="profilePicture" src="${user.profileImage}" alt="Profile Picture">
        </div>
        <div class="profilePageGridAreaA">
            <h2>About <span class="usernameProfilePage">${user.displayName}</span>:</h2>
            <div class="personalInfoContainers" id="profilePageInfo">${user.aboutMe}</div>
        </div>
        <div class="profilePageGridAreaC">
            <h2> My favorite movies:</h2>
            <div class="personalInfoContainers" id="favMoviesProfilePage"> ${movieList}</div>
        </div>
        <div class="profilePageGridAreaB">
            <h2>My rated movies:</h2>
            <div class="personalInfoContainers" id="ratedMoviesProfilePage"> ${ratedMoviesList}</div>
        </div>
        <div class="profilePageGridAreaB"> 
            <h2>My favorite genre:</h2>
            <div class="personalInfoContainers" id="favGenreProfilePage"> ${genreList}</div>
        </div>
    </div>
  `;
}

function editProfilePageView() {
    const user = model.app.loggedInUser;
    const movies = model.data.movies;
    const favGenre = user.favGenre;
    const genreList = generateFavGenreList (favGenre);
    const ratedMovies = user.myRatedMovies;
    const ratedMoviesList = ratedMoviesOfUser(ratedMovies);

    let movieCheckboxes = '';
    for (let movie of movies) {
        movieCheckboxes += `
            <input type="checkbox" id="${movie.title}" value="${movie.id}" ${
                user.favMovies.some(favMovie => favMovie.id === movie.id) ? 'checked' : ''
            }>
            <label for="${movie.title}">${movie.title}</label><br>
        `;
    }

    document.getElementById('app').innerHTML = menuButtonAndSearchBar + /*HTML*/ `
    <button onclick="saveProfileInfo()" class="editProfileButtons">Save Profile Info</button>
    <h2>Hi <span class="usernameProfilePage">${user.displayName}</span>! Welcome to your profile page.</h2>
        <div id="profilePageContainer">
            <div class="profileInfo">
                <img class="profilePicture" src="${user.profileImage || 'emptyUser.jpg'}" alt="Profile Picture">
                <br>
                <input id="imageInputField" type="text" value="" placeholder="Add url for profile image">
            </div>
            <div class="personalInfoContainers" id="profilePageInfo">
                <h4>Edit display name:</h4>
                <input id="editProfileNameInput" class="editProfileInputs" type="text" value="" placeholder="Enter new display name">
                <h4> Edit your description:</h4>
                <textarea type="text" id="editProfileDescriptionInput" value="" placeholder="${user.aboutMe}"></textarea>
                <br>
            </div>
            <div class="personalInfoContainers">
                <h2> My favorite movies:</h2>
                <div id="editFavMoviesProfilePage">
                    ${movieCheckboxes}
                </div>
            </div>
            <div class="personalInfoContainers">
                <h2>My rated movies:</h2>
                <div id="ratedMoviesProfilePage"> ${ratedMoviesList}</div>
            </div>
            <div class="personalInfoContainers">
                <h2>My favorite genre:</h2>
                <div id="favGenreProfilePage"> ${genreList}</div>
                <input type="text" id="favoriteGenreInput" placeholder="Enter favorite genre" onchange="addFavoriteGenre();editProfilePageView() ">
            </div>
        </div>
    `;
}
