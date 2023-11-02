function loginPageView() {
    document.getElementById('app').innerHTML = /*HTML*/`
<div class="loginContainer">
    <h1>Welcome to PowerTurtle's rating page for movies!</h1>
    <div class="inputGroup">
        <label class="loginPageLabel" for="userName"> Username:</label>
        <input class="loginPageInput" type="text" id="userName" placeholder= "Enter your username or email">
    </div>
    <div class="inputGroup">
        <label class="loginPageLabel" for="password"> Password:</label>
        <input class="loginPageInput" type="password" id="password" placeholder="Fill in your password">
    </div>
    <div id="loginPageButtonsDiv">
        <button class="loginPageButtons" onclick="userLogin()">Log in</button>
        <button class="loginPageButtons" onclick="registrationPageView()">Register user</button>
        <button class="loginPageButtons" onclick="forgotPassword()">Forgot password?</button>
    </div>
    <div id="errorMessage"></div>
    <p>Top Rated Movies:</p>
    <div id="topFourMoviesDiv"></div>
</div>
    `; // Usikker på om errorMessage trenger å være med. Overskriften trenger ikke å være den som er nå.
    showTopFourMoviesLoginPageView();
}

function showTopFourMoviesLoginPageView(){
    const movies = model.data.movies.slice(); 
    let currentIndexOfMovies = 0;
    movies.sort((a, b) => b.overallRating - a.overallRating);

    const topFourMoviesDiv = document.getElementById('topFourMoviesDiv');
    topFourMoviesDiv.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const currentIndex = (currentIndexOfMovies + i) % movies.length;
        const movie = movies[currentIndex];

        const movieCard = document.createElement('div');
        movieCard.classList.add('showTopFourRatedMovies');
        movieCard.addEventListener('click', () => {movieInfoPageView(movie.id)});
        movieCard.innerHTML = /*HTML*/ `
        <div class="movieCardsLoginPage" id=movieCard${movie.id}>
        <h2 class="topFourMovieTitles">${movie.title}</h2>
        <img src="${movie.cover}" class="coverImages">
        <br>
        <div><span class=infoSpanLoginPage>Rating: </span><span class="movieInfoSpanLoginPage">${movie.overallRating}/1000</span></div>
        </div>
        `;
        topFourMoviesDiv.appendChild(movieCard);
    }
}
