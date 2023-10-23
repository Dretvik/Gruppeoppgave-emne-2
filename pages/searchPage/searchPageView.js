function displaySearchResults(movies) {
    document.getElementById('app').innerHTML = menuButtonAndSearchBar + /*HTML*/`
    <div id='searchResultDiv'></div>
    `; 
    for (let movie of movies){
        document.getElementById('searchResultDiv').innerHTML += /*HTML*/` 
            <div onclick="movieInfoPageView(${movie.id})" class="movieCards" id=movieCard${movie.id}>
                <h2 class="movieTitles">${movie.title}</h2>
                <img src="${movie.cover}" class="coverImages">
                <p>Info about this movie:</p>
                <div><span>Rating: ${movie.overallRating}/1000</span></div>
                <div><span>Your rating: ${movie.personalRating}/1000</span></div>
                <div><span>Length: ${movie.duration}</span></div>
                <div><span>Genre: ${movie.genre}</span></div>
    `;
    }
}