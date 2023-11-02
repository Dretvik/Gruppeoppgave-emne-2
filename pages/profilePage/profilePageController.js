function saveProfileInfo() {
    const user = model.app.loggedInUser;
    const newDescription = document.getElementById('editProfileDescriptionInput').value;
    const newName = document.getElementById('editProfileNameInput').value;
    const newImage = document.getElementById('imageInputField').value;
    const newGenre = document.getElementById('favoriteGenreInput').value

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
    if (newGenre.trim() !== '') {
        user.genre = newGenre;
    }
    editProfileAddToFavMovie();
    profilePageView();
}

function editProfileAddToFavMovie() {
    const user = model.app.loggedInUser;
    const selectedMovies = [];
    const movieCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let checkbox of movieCheckboxes) {
        if (checkbox.checked) {
            const movieId = parseInt(checkbox.value);
            const movie = model.data.movies.find(movie => movie.id === movieId);
            if (movie) {
                selectedMovies.push(movie);
            }
        }
    }
    if (selectedMovies.length > 0) {
        user.favMovies = selectedMovies;
    }
}

function generateFavoriteMovieList(movieObjects) {
    let movieList = '';
    if (movieObjects.length > 0) {
        for (let movie of movieObjects) {
            movieList += /*HTML*/`
            <span class="favMoviesProfilePage" onclick="movieInfoPageView(${movie.id})">${movie.title}</span><br>
        `;
        }
    } else {
        movieList = 'No favorite movies selected';
    }
    return movieList;
}

function ratedMoviesOfUser(ratedMovies) {
    let ratedMovieList = '';
    if (ratedMovies.length > 0) {
        for (let ratedMovie of ratedMovies) {
            ratedMovieList += /*HTML*/`
            <div>
                <span>${ratedMovie.title}</span><br>
                <span style="color:white;">My personal rating: </span>
                <span>${ratedMovie.personalRating}/1000</span><br>
            </div>
        `;
        }
    } 
    else {
        ratedMovieList = 'No movies rated';
    }
    return ratedMovieList;
}

function addFavoriteGenre() {
    const genreInput = document.getElementById('favoriteGenreInput').value;
    if (genreInput.trim() === '') {
        alert('You have not entered a genre.');
        return;
    }

    model.app.loggedInUser.favGenre.push (genreInput);
    document.getElementById('favoriteGenreInput').value = '';
}

function generateFavGenreList(genres){
    let genreList = '';
    if (genres.length > 0) {
        for (let genre of genres) {
            genreList += /*HTML*/`
            <label for="${genre}">${genre}</label><br>
        `;
        }
    } 
    else {
        genreList = "You haven't added any genres yet";
    }
    return genreList;
}

