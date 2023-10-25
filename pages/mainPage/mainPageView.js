function mainPageView(){
    document.getElementById('app').innerHTML = menuButtonAndSearchBar + /*HTML*/`
    <div id="mainContainer">
    <input type="radio" name="position" checked />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <main id="carousel">
      <div class="item"><img src="${model.data.movies[0].cover}"></div>
      <div class="item"><img src="${model.data.movies[1].cover}"></div>
      <div class="item"><img src="${model.data.movies[2].cover}"></div>
      <div class="item"><img src="${model.data.movies[3].cover}"></div>
      <div class="item"><img src="${model.data.movies[4].cover}"></div>
      <div class="item"><img src="${model.data.movies[5].cover}"></div>
      <div class="item"><img src="${model.data.movies[6].cover}"></div>
      <div class="item"><img src="${model.data.movies[7].cover}"></div>
      <div class="item"><img src="${model.data.movies[8].cover}"></div>
      <div class="item"><img src="${model.data.movies[9].cover}"></div>
      </main>
    </div>

    `;
}