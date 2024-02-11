import { useState } from "react";
import { useSelector } from "react-redux";

const MovieDetailsHeader = () => {
    const [isClosed, setIsClosed] = useState(true);
    const { movieDetails, movieVideos } = useSelector(state => state.details);
    const releaseDate = movieDetails && movieDetails.release_date.split("-");
    const genres = movieDetails && movieDetails.genres.map(genre => {
        return genre.name;
    });

    const filterTrailer = movieVideos && movieVideos.results?.filter(movie => {
        return movie.type === 'Trailer'
    });

    const handlePlayTrailer = () => {
        setIsClosed(false);
    };

    const handleClosePlayTrailer = () => {
        setIsClosed(true);
    }

    const converMinutesIntoHoursAndMinutes = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remaningMinutes = minutes % 60;
        return `${hours}h ${remaningMinutes}m`
    }

    const duration = movieDetails && converMinutesIntoHoursAndMinutes(movieDetails.runtime);

    return (
        <>
            {movieDetails && <div className="bg-cover" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movieDetails.backdrop_path})` }}>
                <div className="flex m-auto px-60 py-10 w-full bg-black bg-opacity-80">
                    <div className="w-3/12">
                        <img className="rounded w-11/12" alt="movie-poster" src={"https://image.tmdb.org/t/p/w780/" + movieDetails.poster_path} />
                    </div>
                    <div className="text-white w-9/12">
                        <div className="">
                            <h2 className="text-4xl font-bold px-2">{movieDetails.title} <span className="font-thin">({releaseDate[0]})</span></h2>
                            <ul className="flex px-2 gap-6 font-medium text-lg">
                                <li className="">{movieDetails.release_date}</li>
                                <li className="list-disc">{genres.join(', ')}</li>
                                <li className="list-disc">{duration}</li>
                            </ul>
                            <div className="p-2 text-xl flex items-center font-bold gap-4 mt-2" onClick={handlePlayTrailer}>
                                <i className='bx bx-play text-5xl p-4 rounded-full bg-black bg-opacity-50 ml-2'></i>
                                <p className="">Play Trailer</p>
                            </div>
                            <div className="p-2">
                                <h2 className="mb-2 text-2xl font-bold">Overview</h2>
                                <p className="tracking-wide opacity-95">{movieDetails.overview}</p>
                            </div>
                            <div className="flex w-96 justify-between items-center mt-8">
                                <div>
                                    <h2 className="font-bold">Will Gluck</h2>
                                    <p className="font-thin">Director, Screenplay</p>
                                </div>
                                <div>
                                    <h2 className="font-bold">Will Gluck</h2>
                                    <p className="font-thin">Director, Screenplay</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {movieVideos && !isClosed &&
                <>
                    <div className="absolute top-0 left-0 w-screen aspect-video z-40 bg-black bg-opacity-95">
                        <p className="absolute right-40 top-10 text-white text-5xl" onClick={handleClosePlayTrailer}><i class='bx bx-x'></i></p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full">
                        <div className="w-8/12 m-auto">
                            <iframe className="w-full aspect-video"
                                src={"https://www.youtube.com/embed/"+filterTrailer[0].key+"?si=-CZUWqRkU4SlDsQd&amp;controls=1"}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default MovieDetailsHeader;