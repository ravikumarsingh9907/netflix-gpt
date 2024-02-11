import Header from "../Header";
import MovieDetailsHeader from "./MovieDetailsHeader";
import Cast from "./Cast";
import Videos from "./Videos";
import Gallery from "./Gallery";
import { useParams } from "react-router-dom";
import useMovieDetails from "../../Hooks/useMovieDetails";
import { addMovieVideos, addMovieDetails, addMovieCast, addMovieGallery } from "../../Utils/detailsSlice";
import SideDetails from "./SideDetails";

const Details = () => {
    const id = useParams().id;
    useMovieDetails('https://api.themoviedb.org/3/movie/' + id + '?language=en-US', addMovieDetails);
    useMovieDetails('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', addMovieVideos);
    useMovieDetails('https://api.themoviedb.org/3/movie/' + id + '/credits?language=en-US', addMovieCast);
    useMovieDetails('https://api.themoviedb.org/3/movie/' + id + '/images', addMovieGallery);

    return (
        <>
            <Header />
            <MovieDetailsHeader />
            <div className="flex w-11/12 m-auto mt-4 pb-4">
                <div className="w-8/12">
                    <Cast />
                    <Videos />
                    <Gallery />
                </div>
                <div className="w-4/12">
                    <SideDetails />
                </div>
            </div>
        </>
    );
}

export default Details;