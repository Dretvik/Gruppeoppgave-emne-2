function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const movies = model.data.movies.slice(); 
    movies.sort((a, b) => b.overallRating - a.overallRating);

    if (searchTerm === "") {
        document.getElementById('app').innerHTML = menuButtonAndSearchBar +/*HTML*/`
            <h1 class="searchInfoH1">No search word given.</h1>
            <p>Here is a list of movies you might like:</p>
            <div id='searchResultDiv'></div>
            `; 
            noResultSearchPageView();
    } else {
        const filteredMovies = model.data.movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        if (filteredMovies.length > 0) {
            displaySearchResultsPageView(filteredMovies);
        } else {
            document.getElementById('app').innerHTML = menuButtonAndSearchBar +/*HTML*/`
            <h1 class="searchInfoH1">Search for "<span class="movieVariableText">${searchInput.value}</span>" gave no results.</h1>
            <p>Here is a list of movies you might like:</p>
            <div id='searchResultDiv'></div>
            `; 
            noResultSearchPageView();  
        }
    }
}