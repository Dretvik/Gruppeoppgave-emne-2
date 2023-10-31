
function movieInfoPageView(movieId){
    const movie = model.data.movies.find(movie => movie.id === movieId);
    const isRatedByUser = movie.personalRating ? movie.personalRating +'/1000' : 'No personal rating yet';

    app.innerHTML = menuButtonAndSearchBar + /*HTML*/`
    <div id="movieInfoButtonsDiv">
        <button class="movieInfoButtons" onclick="showRatingInput(${movie.id})">Rate Movie</button>
    </div>
    <div id="isFavoriteInfoDiv"></div>
    <div id="isPersonallyRatedDiv"></div>
    <div id="movieInfoContainer">
    <h1>${movie.title}</h1>
    <img src="${movie.cover}" id="movieInfoCoverImage">
    <h4 class="movieInfoH4 movieVariableText">Info about ${movie.title}:</h4>
        <div class="movieInformationContainer">
            <span class="movieInfoAreaA movieVariableText">Genre:</span>
            <span class="movieInfoAreaB">${movie.genre}</span>
            <span class="movieInfoAreaA movieVariableText">Year of release:</span>
            <span class="movieInfoAreaB">${movie.releaseDate}</span>
            <span class="movieInfoAreaA movieVariableText">Length of movie:</span>
            <span class="movieInfoAreaB">${movie.duration}</span>
            <span class="movieInfoAreaA movieVariableText">Overall Rating:</span>
            <span class="movieInfoAreaB">${movie.overallRating}/1000</span>
            <span class="movieInfoAreaA movieVariableText">Your Personal Rating:</span>
            <span class="movieInfoAreaB"> ${isRatedByUser}</span>
            <span class="movieInfoAreaA movieVariableText">Movie Description:</span>
            <span class="movieInfoAreaB">${movie.description}</span>
        </div>
        <h4 class="movieInfoH4 movieVariableText">Top credirs</h4>
        <div class="movieInformationContainer">
            <span class="movieInfoAreaA movieVariableText">Directors:</span>
            <span class="movieInfoAreaB">${movie.directors}</span>
            <span class="movieInfoAreaA movieVariableText">Actors:</span>
            <span class="movieInfoAreaB">
                ${movie.staringActors[0]}
                <br>
                ${movie.staringActors[1]}
                <br>
                ${movie.staringActors[2]}
            </span>
        </div>
    </div>
    `;
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