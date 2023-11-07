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

function generateFavGenreList(genres){
    let genreList = '';
    if (genres.length > 0) {
        for (let genre of genres) {
            genreList += /*HTML*/`
            <div>
                <label class="favGenresProfilePage" onclick="showMoviesByGenre('${genre}')">${genre}</label>
            </div>
        `;
        }
    } 
    else {
        genreList = "You haven't added any genres yet";
    }
    return genreList;
}

function extractMovieGenres() {
    const movieGenres = [];
    model.data.movies.forEach(movie => {
        movie.genre.forEach(genre => {
            if (!movieGenres.includes(genre)) {
                movieGenres.push(genre);
            }
        });
    });
    return movieGenres;
}

function displayGenresAndAllowSelection() {
    const allMovieGenres = extractMovieGenres();
    const genreList = document.getElementById('editFavGenreProfilePage');
    const user = model.app.loggedInUser;

    allMovieGenres.forEach(genre => {
        const genreCheckbox = document.createElement('input');
        genreCheckbox.type = 'checkbox';
        genreCheckbox.value = genre;
        genreCheckbox.id = `genre-${genre}`;
        genreCheckbox.checked = user.favGenre.includes(genre);
        genreCheckbox.addEventListener('change', function (event) {
            if (event.target.checked) {
                user.favGenre.push(genre);
            } else {
                const index = user.favGenre.indexOf(genre);
                if (index !== -1) {
                    user.favGenre.splice(index, 1);
                }
            }
        });

        const genreLabel = document.createElement('label');
        genreLabel.htmlFor = `genre-${genre}`;
        genreLabel.textContent = genre;

        genreList.appendChild(genreCheckbox);
        genreList.appendChild(genreLabel);
        genreList.appendChild(document.createElement('br'));
    });
}
 
function generateGenreMovieList(movies) {
    let movieList = '';
    if (movies.length > 0) {
        for (let movie of movies) {
            const movieGenre = movie.genre;
            const genreList = generateFavMovieList(movieGenre);
            const isRatedByUser = movie.personalRating ?
            '<span class="movieVariableText">' + 'Your rating: '+ '</span>' + '<span>'+ movie.personalRating +'/1000'+'</span>' :
            '<span class="movieVariableText">' + 'No personal rating yet' + '</span>';

            movieList += /*HTML*/`
            <div onclick="movieInfoPageView(${movie.id})" class="movieCards" id=movieCard${movie.id}>
                <h2 class="movieTitles">${movie.title}</h2>
                <img src="${movie.cover}" class="coverImages">
                <p>Info about this movie:</p>
                <div><span class="movieVariableText">Rating:</span><span> ${movie.overallRating}/1000</span></div>
                <div>${isRatedByUser}</div>
                <br>
                <div><span class="movieVariableText">Length:</span><span> ${movie.duration}</span></div>
                <div><span class="movieVariableText">Genres:</span><div id="genresDivSearchPage">${genreList}</div></div>
            </div>
            `;
        }
    }
    return movieList;
}

function showMoviesByGenre(selectedGenre) {
    const moviesWithGenre = model.data.movies.filter(movie => movie.genre.includes(selectedGenre));
    const movieList = generateGenreMovieList(moviesWithGenre);

    document.getElementById('app').innerHTML = menuButtonAndSearchBar + /*HTML*/`
    <h2>Movies with genre: <span class="movieVariableText">"${selectedGenre}"</span>:</h2>
    <div id="searchResultDiv">
        ${movieList}
    </div>
    `;
}
