import { useSelector } from "react-redux";

const VideoBackground = () => {
    const { movieTrailer } = useSelector(state => state.movies);

    return (
        <div className="absolute -top-40 -z-50 w-screen">
            {movieTrailer && <iframe className="w-screen aspect-video m-auto"
                src={"https://www.youtube.com/embed/" + movieTrailer.trailer.key +"?autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>}
        </div>
    );
}

export default VideoBackground;