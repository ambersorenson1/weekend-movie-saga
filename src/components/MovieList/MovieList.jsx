import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    //making a route to add a new movie
    const pushAddMovie =() => {
        history.push('/addmovie');
    }

    // this will route to detail page for a specific movie based on the id
    //and dispatch action to saga to fetch details from reducer
    const addMovieDetails = (id) => {
        dispatch ({
            type: 'FETCH_MOVIE_DETAILS',
            payload: id
        })
        history.push('/details');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch ({ type: 'FETCH_GENRES'});
    }, []);

    return (
        <main>
            <button id="addBtn" onClick={pushAddMovie}>Add a Movie</button>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}
                            onClick={(event) => addMovieDetails(movie.id)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;