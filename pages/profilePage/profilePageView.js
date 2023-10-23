function profilePageView () {
const user = model.app.loggedInUser;
document.getElementById('app').innerHTML = menuButtonAndSearchBar + /*HTML*/`
<div id="profilePageContainer">
    <div class="profileInfo">
        <img class="profilePicture" src="${user.profileImage || 'emptyUser.jpg'}" alt="Profile Picture">
        <h2>Hi ${user.userName}! Welcome to your profile page.</h2>
    </div>
        <div id="profilePageInfo">
        <h2>About ${user.userName}, ${user.aboutMe}</h2>
    </div>
    <div>
        <h2> My favourite movies:</h2>
        <div id="favMoviesProfilePage"> ${user.favMovies}</div>
    </div>
    <div>
        <h2>My rated movies:</h2>
        <div id="ratedMoviesProfilePage"> ${user.myRatedMovies}</div>
    </div>
    <div> 
        <h2>Favourite genre:</h2>
        <div id="favGenreProfilePage"> ${user.favGenre}</div>
    </div>

</div>
  `;
}