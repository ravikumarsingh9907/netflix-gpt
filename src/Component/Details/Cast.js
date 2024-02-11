import { useSelector } from 'react-redux';
import profileImg from '../../Utils/profile-tmdb.svg'

const Cast = () => {
    const { movieCast } = useSelector(state => state.details);

    return (
        <div>
            <div className="text-white w-11/12 mt-4 ml-12">
                <h2 className="text-3xl font-bold">Cast</h2>
            </div>
            <div className="content text-white overflow-x-scroll w-11/12 m-auto flex">
                {movieCast && movieCast?.cast?.map(cast => {
                    return (
                        <div className="w-36 rounded-lg bg-gray-700 m-2" key={cast.id}>
                            <div className="overflow-hidden h-44">
                                {cast.profile_path == null ? <img className="w-36 rounded-lg" alt="cast-img" src={profileImg} /> : <img className="w-full rounded-lg" alt="cast-img" src={'https://image.tmdb.org/t/p/w780/' + cast.profile_path} />}
                            </div>
                            <div className="w-36">
                                <p className="pt-2 pl-2 font-bold text-sm">{cast.name}</p>
                                <p className="pb-2 pl-2 word-break text-sm">{cast.character}</p>
                            </div> 
                        </div>
                    );
                })}
            </div>
            <div className='ml-12 mt-8 bg-white border-b-2 opacity-40 w-11/12'></div>
        </div>
    )
}

export default Cast;