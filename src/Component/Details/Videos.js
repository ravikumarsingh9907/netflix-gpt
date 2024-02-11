import { useSelector } from "react-redux";

const Videos = () => {
    const { movieVideos } = useSelector(state => state.details);

    return (
        <div className="w-11/12 m-auto">
            <h2 className="text-white font-bold text-3xl mt-4">Videos</h2>
            <div className="flex overflow-x-scroll gap-1 content p-4">
                {movieVideos && movieVideos?.results?.map(video => {
                    return (
                        <div className="hover:aspect-video" key={video.id}>
                            <iframe width="533" height="300" src={"https://www.youtube.com/embed/"+ video.key +"?si=xFy0nejoDffqUVUj&amp;controls=1&paused=1&fullscreen=1"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                        </div>
                    );
                })
                }
            </div>
            <div className='mt-8 bg-white border-b-2 opacity-40'></div>
        </div>
    );
}

export default Videos;