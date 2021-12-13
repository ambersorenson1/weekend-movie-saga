import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function MovieDetails(){
const history = useHistory();
const dispatch = useDispatch();
const movieDetails = useSelector((store) => store.movieDetails);

const takeToHomePage = () => {
    dispatch ({ type: 'CLEAR_MOVIE_DETAILS', payload: []});
    history.push('/');
}









}

export default MovieDetails;