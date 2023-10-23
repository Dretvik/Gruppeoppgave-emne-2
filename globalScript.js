function userLogout(){
    model.app.loggedInUser = null;
    loginPageView();
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
        document.getElementById('app').innerHTML = menuButtonAndSearchBar +/*HTML*/`
            <h1>No seach word given</h1>
            `;
    } else {
        const filteredMovies = model.data.movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        if (filteredMovies.length > 0) {
            displaySearchResults(filteredMovies);
        } else {
            document.getElementById('app').innerHTML = menuButtonAndSearchBar +/*HTML*/`
            <h1>Search gave no results!</h1>
            `;
        }
    }
}