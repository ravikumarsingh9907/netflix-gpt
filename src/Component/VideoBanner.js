
import useFetchDataById from "../Hooks/useFetchDataById";
import VideoBackground from './VideoBackground';
import { useSelector } from "react-redux";

const VideoBanner = ({movie}) => {
    const { movieTrailer } = useSelector(state => state.movies);
    useFetchDataById(movie);

    return (
        <div className="">
            <div className="w-screen aspect-video absolute top-0 bg-gradient-to-t from-black text-white pl-20 -z-10">
                <div className="mt-60">
                    <h2 className="text-4xl font-bold drop-shadow-sm w-96 break-words">{movieTrailer && movieTrailer.title}</h2>
                    <p className="w-96">{movieTrailer && movieTrailer.overview}</p>
                    <div className="flex items-center gap-4 mt-4">
                        <button className="flex items-center py-2 px-6 rounded bg-white text-black">
                            <i className='bx bx-play text-4xl'></i>
                            <p className="text-lg font-medium">Play</p>
                        </button>
                        <button className="flex items-center py-2 px-6 rounded bg-gray-500 text-white bg-opacity-50">
                            <i className='bx bx-info-circle text-4xl'></i>
                            <p className="text-lg font-medium">More Info</p>
                        </button>
                    </div>
                </div>
            </div>
            {movie && <VideoBackground />}
        </div>
    );
}

export default VideoBanner;