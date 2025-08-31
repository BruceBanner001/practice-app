import './movie.css';
import {moviesList} from './data/MoviesData.js';
import MovieList from './MovieList';

function fetchMoviesData(){
    return moviesList;
}

const MoviesContainer = () => {
    const Movies = fetchMoviesData();
    return (
        <div className="movie-container" >
            <h1>K-Dramas</h1>
            <ul className='movie-list'>
                {
                    Movies.map((Movie) => (
                        <MovieList movie={Movie} key={Movie.id}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default MoviesContainer;