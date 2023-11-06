function performSearch() {
    model.app.currentPage = model.app.pages[4]; // searchPage
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const movies = model.data.movies.slice(); 
    movies.sort((a, b) => b.overallRating - a.overallRating);

    // Use a temp menu bar setup based on user login
    let tempSearchPageMenuBar = menuButtonAndSearchBar;

    if (model.app.loggedInUser == null) {
        tempSearchPageMenuBar = backButton + pageTitle + searchBar;
    }

    if (searchTerm === "") {
        document.getElementById('app').innerHTML = tempSearchPageMenuBar +/*HTML*/`
            <h1 class="searchInfoH1">No search word given.</h1>
            <p>Here is a list of movies you might like:</p>
            <div id='searchResultDiv'></div>
            `; 
            displaySearchResultsPageView(null);
    } else {
        const filteredMovies = model.data.movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        if (filteredMovies.length > 0) {
            document.getElementById('app').innerHTML = tempSearchPageMenuBar + /*HTML*/`
            <h4>Here a list of is all the movies that contains "<span class="movieVariableText">${searchInput.value}</span>" in the title:</h4>
            <div id='searchResultDiv'></div>
            `;
            displaySearchResultsPageView(filteredMovies);
        } else {
            document.getElementById('app').innerHTML = tempSearchPageMenuBar +/*HTML*/`
            <h1 class="searchInfoH1">Search for "<span class="movieVariableText">${searchInput.value}</span>" gave no results.</h1>
            <p>Here is a list of movies you might like:</p>
            <div id='searchResultDiv'></div>
            `; 
            displaySearchResultsPageView(null);  
        }
    }
}
function generateFavMovieList(movieGenres) {
    let genreList = '';
    if (movieGenres.length > 0) {
        for (let movieGenre of movieGenres) {
            genreList += /*HTML*/`
            <span>${movieGenre}</span>
        `;
        }
    } 
    return genreList;
}