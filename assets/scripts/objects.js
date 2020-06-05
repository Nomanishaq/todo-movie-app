const renderMovie = (filter = '')=>{
const movieList = document.getElementById('movie-list');
    
    if (movies.length === 0) {
        movieList.className.remove('visible');
        return;
    }
    else{
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    
    const filterMovie = !filter ? movies : movies.filter(movie=> movie.info.title.includes(filter));
    
    filterMovie.map((movie)=>{
        const movieElem = document.createElement('li');
        const {info} = movie;
        const {title} = info;
        let text = title + ' - ';
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieElem.textContent = text;
        movieList.append(movieElem);
    });
};

const addMovieHamdler = ()=>{

    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
)
{
    return;
}
    const newMovie = {
        id: Math.random(),
        info:{
            title,
            [extraName]: extraValue
        }
        };
    movies.push(newMovie);
    renderMovie();
    console.log(movies);
    
    clearField();
}
const clearField = ()=>{
    const field = userInput.querySelectorAll('input');
    for (const val of field) {
            val.value = '';
    }
}
const searchMovieHandler = ()=>{
    const filterValue = document.getElementById('filter-title').value;
    renderMovie(filterValue);
}

addMoviebtn.addEventListener('click',addMovieHamdler);
searchBtn.addEventListener('click',searchMovieHandler);