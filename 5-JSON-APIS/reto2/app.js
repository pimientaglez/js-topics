const searchButton = document.querySelector('#searchMovieButton');
const movieTitle = document.querySelector('#movieTitle');
const container = document.querySelector('#movieList')  ;

searchButton.addEventListener('click',()=>{
    container.innerHTML = '';
    const movie = movieTitle.value;
    let movieList = '';
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=d4ac7d57`)
        .then(data=> {return data.json()})
        .then(data => {
            console.log(data)
            data.Search.forEach(movie => {
                movieList += `<div class="card" style="width:220px; display: inline-block; min-height: 450px">
                <img src="${movie.Poster}" class="card-img-top" height="250px">
                <div class="card-body" >
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                </div>
                </div>`
            });
            container.innerHTML = movieList;
        });
});