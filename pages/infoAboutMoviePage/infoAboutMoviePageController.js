
function submitMovieRating(id) {
    const movieRatingInput = document.getElementById('movieRatingInput');
    const rating = parseFloat(movieRatingInput.value);

    if (isNaN(rating) || rating < 0 || rating > 1000) {
        alert('Please enter a valid rating between 0 and 1000.');
    } else {
        const movieId = id; 
        const movie = model.data.movies.find(movie => movie.id === movieId);
        movie.personalRating = rating; 
        model.app.loggedInUser.myRatedMovies.push(movie);

        movieInfoPageView(movieId);
    }
}