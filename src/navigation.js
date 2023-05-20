//Para que la pagina comience por arriba
window.scrollTo(0, 0);
searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=';
})
trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
})
arrowBtn.addEventListener('click', () => {
    location.hash = '#home';
})
window.addEventListener('DOMContentLoaded',navigator,false)
window.addEventListener('hashchange',navigator,false)
function navigator(){
    console.log(location)
    if(location.hash.startsWith('#trends')){
        trendsPage()
    }else if(location.hash.startsWith('#search=')){
        searchPage()
    }
    else if(location.hash.startsWith('#movie=')){
        movieDetailsPage();
    }
    else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }else{
        homePage();
    }
    location.hash
}

function homePage(){
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    headerTitle.classList.remove('inactive');
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white')
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')
    
    getCategoriesMoviesPreview();
    getTrendingMoviesPreview();
}
function categoriesPage(){
    console.log('Categories')
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white')
    searchForm.classList.add('incative')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
    //Para encotrar el id usamos el metodo hash y despues el split para dividir los contenidos
    //Aca utilizo una forma para nombrar directamente las variables del split
    const [_,categoryData]= location.hash.split('=') //['#category','id_name']
    const [categoryId, categoriesName] = categoryData.split('-');
    headerCategoryTitle.innerHTML = categoriesName
    getMoviesByCategory(categoryId);
}
function movieDetailsPage(){
    console.log('Movie')
    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.style.display = 'none'


    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')
}
function searchPage(){
    console.log('Search')
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white')
    searchForm.classList.add('incative')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}
function trendsPage(){
    console.log('TRENDSSS')
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}