function mainPageView(){
  const moviesHigestRated = model.data.movies.slice(); 
  moviesHigestRated.sort((a, b) => b.overallRating - a.overallRating)

  const moviesAlphabetic = model.data.movies.slice();
  moviesAlphabetic.sort ((a, b) => a.title.localeCompare(b.title))

  const moviesReleaseDate = model.data.movies.slice();
  moviesReleaseDate.sort((a, b) => b.releaseDate - a.releaseDate)

    document.getElementById('app').innerHTML = menuButtonAndSearchBar + /*HTML*/`
    <div id="mainContainer1">
    <h1 id="h1MainPage">Top rated</h1>
    <input type="radio" name="position" checked />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
   
    
    
    <main id="carousel">
    <div class="item" onclick="movieInfoPageView(${moviesHigestRated[0].id});"><img src="${moviesHigestRated[0].cover}"><p>Overall rating: ${moviesHigestRated[0].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesHigestRated[1].id});"><img src="${moviesHigestRated[1].cover}"><p>Overall rating: ${moviesHigestRated[1].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesHigestRated[2].id});"><img src="${moviesHigestRated[2].cover}"><p>Overall rating: ${moviesHigestRated[2].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesHigestRated[3].id});"><img src="${moviesHigestRated[3].cover}"><p>Overall rating: ${moviesHigestRated[3].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesHigestRated[4].id});"><img src="${moviesHigestRated[4].cover}"><p>Overall rating: ${moviesHigestRated[4].overallRating}/1000</p></div>
      
      
     
      </main>
    </div>



    <div id="mainContainer2">
    <h2 id="h2Realese Date">release Date</h2>
    <input type="radio" name="position2" checked />
    <input type="radio" name="position2" />
    <input type="radio" name="position2" />
    <input type="radio" name="position2" />
    <input type="radio" name="position2" />
   
    
    
    <main id="carousel2">
    <div class="item" onclick="movieInfoPageView(${moviesReleaseDate[0].id});"><img src="${moviesReleaseDate[0].cover}"><p>Overall rating: ${moviesReleaseDate[0].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesReleaseDate[1].id});"><img src="${moviesReleaseDate[1].cover}"><p>Overall rating: ${moviesReleaseDate[1].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesReleaseDate[2].id});"><img src="${moviesReleaseDate[2].cover}"><p>Overall rating: ${moviesReleaseDate[2].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesReleaseDate[3].id});"><img src="${moviesReleaseDate[3].cover}"><p>Overall rating: ${moviesReleaseDate[3].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesReleaseDate[4].id});"><img src="${moviesReleaseDate[4].cover}"><p>Overall rating: ${moviesReleaseDate[4].overallRating}/1000</p></div>
      
      
     
      </main>
    </div>
    <div id="mainContainer3">
<main id="carousel3">
<h3 id="h3MainPage"></h3>
    <input type="radio" name="position3" checked />
    <input type="radio" name="position3" />
    <input type="radio" name="position3" />
    <input type="radio" name="position3" />
    <input type="radio" name="position3" />
   
    
    
    <main id="carousel3">
    <div class="item" onclick="movieInfoPageView(${moviesAlphabetic[0].id});"><img src="${moviesAlphabetic[0].cover}"><p>Overall rating: ${moviesHigestRated[0].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesAlphabetic[1].id});"><img src="${moviesAlphabetic[1].cover}"><p>Overall rating: ${moviesHigestRated[1].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesAlphabetic[2].id});"><img src="${moviesAlphabetic[2].cover}"><p>Overall rating: ${moviesHigestRated[2].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesAlphabetic[3].id});"><img src="${moviesAlphabetic[3].cover}"><p>Overall rating: ${moviesHigestRated[3].overallRating}/1000</p></div>
    <div class="item" onclick="movieInfoPageView(${moviesAlphabetic[4].id});"><img src="${moviesAlphabetic[4].cover}"><p>Overall rating: ${moviesHigestRated[4].overallRating}/1000</p></div>
      
      
     
      </main>
    </div>
    `;
}