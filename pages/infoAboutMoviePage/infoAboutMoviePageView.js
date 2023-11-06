
function movieInfoPageView(movieId){
    model.app.currentPage = model.app.pages[3]; // moviePage

    const movie = model.data.movies.find(movie => movie.id === movieId);

    // Format the genre view
    let tempGenreView = movie.genre;

    if (movie.genre.length > 1) {
        tempGenreView = movie.genre.join(", ");
    }
    
    const movieInfoPageViewTopHTML = /*HTML*/`
    <div id="isFavoriteInfoDiv"></div>
    <div id="isPersonallyRatedDiv"></div>
    <div id="movieInfoContainer">
    <h1>${movie.title}</h1>
    <img src="${movie.cover}" id="movieInfoCoverImage">
    <h4 class="movieInfoH4 movieVariableText">Info about ${movie.title}:</h4>
    <div class="movieInformationContainer">
    <div class="movieInfoAreaA movieVariableText">Genre:</div>
    <div class="movieInfoAreaB">${tempGenreView}</div>
    <div class="movieInfoAreaA movieVariableText">Year of release:</div>
    <div class="movieInfoAreaB">${movie.releaseDate}</div>
    <div class="movieInfoAreaA movieVariableText">Length of movie:</div>
    <div class="movieInfoAreaB">${movie.duration}</div>
    <div class="movieInfoAreaA movieVariableText">Overall Rating:</div>
    <div class="movieInfoAreaB">${movie.overallRating}/1000</div>`;

    const movieInfoPageViewBottomHTML = /*HTML*/`
        <div class="movieInfoAreaA movieVariableText">Movie Description:</div>
        <div class="movieInfoAreaB">${movie.description}</div>
        </div>
        <h4 class="movieInfoH4 movieVariableText">Top credits</h4>
        <div class="movieInformationContainer">
            <div class="movieInfoAreaA movieVariableText">Directors:</div>
            <div class="movieInfoAreaB">${movie.directors}</div>
            <div class="movieInfoAreaA movieVariableText">Actors:</div>
            <div class="movieInfoAreaB">
                ${movie.staringActors[0]}
                <br>
                ${movie.staringActors[1]}
                <br>
                ${movie.staringActors[2]}
            </div>
        </div>
    </div>`;

    if (model.app.loggedInUser != null) {
        const isRatedByUser = movie.personalRating ? movie.personalRating +'/1000' : 'No personal rating yet';

        app.innerHTML = menuButtonAndSearchBar + /*HTML*/`
        <div id="movieInfoButtonsDiv">
            <button class="movieInfoButtons" onclick="showRatingInput(${movie.id})">Rate Movie</button>
        </div>`
        + movieInfoPageViewTopHTML

        + /*HTML*/`
        <div class="movieInfoAreaA movieVariableText">Your Personal Rating:</div>
        <div class="movieInfoAreaB"> ${isRatedByUser}</div>`

        + movieInfoPageViewBottomHTML;
    } else {
        app.innerHTML = backButton + pageTitle + searchBar + movieInfoPageViewTopHTML + movieInfoPageViewBottomHTML;
    }
}

function showRatingInput(id) {
    const isPersonalRatingDiv = document.getElementById('isPersonallyRatedDiv');
    isPersonalRatingDiv.innerHTML += /*HTML*/ `
        <div id="ratingInputDiv">
            <input type="number" id="movieRatingInput" placeholder="Enter your rating (0-1000)">
            <button id="submitRatingButton" onclick="submitMovieRating(${id})">Submit</button>
        </div>
    `;
}