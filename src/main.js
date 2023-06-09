const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    'api_key': API_KEY,
  },
});
//Helpers
function createMovies(movies, container){
  //usamos para borrar el contenido asi no haya un duplicado
  container.innerHTML = '';
  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    //
    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/" + movie.poster_path
    );
    movieContainer.appendChild(movieImg);
    container.appendChild(movieContainer);
  });
}
//Llamados a api
async function getTrendingMoviesPreview() {
  const { data } = await api(
    "trending/movie/day"
  );
  const movies = data.results;
  //Utilizamos esto para que no se repita el contenido al llamar de nuevo la function
  createMovies(movies,trendingMoviesPreviewList);
}
async function getCategoriesMoviesPreview() {
  const { data } = await api(
    "genre/movie/list"
  );
  const categories = data.genres;
  categoriesPreviewList.innerHTML = '';
  categories.forEach((category) => {
    
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");
    //
    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", "id" + category.id);
    categoryTitle.addEventListener('click', ()=> {
      location.hash = '#category=' + category.id + '-' + category.name; 
    })
    const categoryTitleText = document.createTextNode(category.name);
    //
    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    categoriesPreviewList .appendChild(categoryContainer);
  });
}

async function getMoviesByCategory(id) {
  const { data } = await api(
    'discover/movie',{
      params:{
        with_genres: id,
      }
    }
  );
  const movies = data.results;
  //Utilizamos esto para que no se repita el contenido al llamar de nuevo la function
  createMovies(movies,genericSection);
}
