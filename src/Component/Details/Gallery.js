import { useSelector } from "react-redux";

const Gallery = () => {
    const { movieGallery } = useSelector(state => state.details);

    return (
        <div className="w-11/12 m-auto">
            <h2 className="text-3xl text-white font-bold mt-4">Gallery</h2>
            <div className="flex overflow-x-scroll flex-shrink-0 gap-2 content p-4">
                {movieGallery && movieGallery?.backdrops?.map(image => {
                    return (
                        <div className="w-full" key={image.file_path}>
                            <img className="max-w-96" alt="gallery" src={'https://image.tmdb.org/t/p/w780/' + image.file_path} />
                        </div>
                    )
                })}
            </div>
            <div className='mt-8 bg-white border-b-2 opacity-40'></div>
        </div>
    );
}

export default Gallery;