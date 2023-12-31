function displaySearchResultsPageView(movies) {
    if (movies != null) {
        movies.sort((a, b) => b.overallRating - a.overallRating);
    } else {
        movies = model.data.movies.slice();
    }

    for (let movie of movies){
        const movieGenre = movie.genre;
        const genreList = generateFavMovieList(movieGenre);
        const isRatedByUser = movie.personalRating ?
        '<span class="movieVariableText">' + 'Your rating: '+ '</span>' + '<span>'+ movie.personalRating +'/1000'+'</span>' :
        '<span class="movieVariableText">' + 'No personal rating yet' + '</span>';
        document.getElementById('searchResultDiv').innerHTML += /*HTML*/` 
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
