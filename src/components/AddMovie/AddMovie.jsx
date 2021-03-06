import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddMovie() {

  //dispatch to saga and it returns all of the genres from the DB to the genre reducer
  useEffect(() => {
    dispatch ({
      type: 'FETCH_GENRES'
    })
  }, []);



//functionality to route to a page
const history = useHistory();
//creates a dispatch to send to saga
const dispatch = useDispatch();
//creates a redux store instance for genres reducer
const genres = useSelector(store => store.genres);
// sets state and captures input data from a user
const [title, setTitle] = useState('');
const [poster, setPoster] = useState('');
const [description, setDescription] = useState('');
const [genre_id, setGenre_id] = useState(0);

//adds state data to an object and sends it to DB via POST
const addMovie = () => {
  console.log(genre_id)
  // if (!title === '' || !poster === '' || !description === ''|| !genre_id === ''){
  //   alert('Please fill out all fields')
  dispatch ({
    type: 'ADD_MOVIE',
    payload: {
      title: title,
      poster: poster,
      description: description,
      genre_id: genre_id
    }
  })
}
  const homeScreen = () => {
    history.push('/');
  }

  return (
    <div>
      <input 
      placeholder="Title"
      type="text"
      value={title}
      onChange={(event) => setTitle(event.target.value)} />
      <input 
      placeholder="Poster Image URL"
      type="text"
      value={poster}
      onChange={(event) => setPoster(event.target.value)} />
      <textarea 
      placeholder="Description"
      type="text"
      value={description}
      onChange={(event) => setDescription(event.target.value)} />
      <select 
      placeholder="Choose a Genre"
      type="text"
      value={genre_id}
      onChange={(event) => setGenre_id(event.target.value)} 
      className="select-genre">
      {genres.map((genre) => {
        return(<option key={genre.id} value={genre.id}>{genre.name}</option>);
      })}
      </select>
      <button onClick={homeScreen}>Cancel</button>
      <button onClick={addMovie}>Save</button>
    </div>
  )

}


export default AddMovie;