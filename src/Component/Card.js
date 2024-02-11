import { useDispatch } from "react-redux";
import options from "../Utils/constants";
import { addMovieDetails, addMovieCast, addMovieVideos, addMovieGallery } from "../Utils/detailsSlice";
import { useNavigate } from "react-router-dom";

const Card = ({ movie }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getMovieDetails = async (id) => {
        const response = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', options);
        const result = await response.json();
        return result;
    }

    const getCastDetails = async (id) => {
        const response = await fetch('https://api.themoviedb.org/3/movie/'+id+'/credits?language=en-US', options);
        const result = await response.json();
        return result;
    }

    const getMoviesDetails = async (id) => {
        const response = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', options);
        const result = await response.json();
        return result;
    }

    const getMovieGallery = async (id) => {
        const response = await fetch('https://api.themoviedb.org/3/movie/'+id+'/images', options);
        const result = await response.json();
        return result;
    }

    const handleMovieDetails = () => {
        getMovieDetails(movie.id).then(data => {
            dispatch(addMovieDetails(data));
        });

        getCastDetails(movie.id).then(data => {
            dispatch(addMovieCast(data.cast));
        });

        getMoviesDetails(movie.id).then(data => {
            dispatch(addMovieVideos(data.results));
        });

        getMovieGallery(movie.id).then(data => {
            dispatch(addMovieGallery(data.backdrops));
        });

        navigate(`/browse/${movie.id}`);
    }

    return (
        <div className="p-4 rounded" onClick={handleMovieDetails}>
            <img className='w-56 max-w-72 rounded drop-shadow-md' alt={movie.title} src={'https://image.tmdb.org/t/p/w780' + movie.poster_path} />
        </div>
    )
}

export default Card;