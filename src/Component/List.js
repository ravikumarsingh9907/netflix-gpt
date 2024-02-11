import Card from './Card';

const List = ({heading, movies}) => {
    return (
        <div className='my-4 mx-8 rounded'>
            <p className='font-normal text-2xl px-4 text-white drop-shadow-xl'>{heading}</p>
            <div className='content flex flex-nowrap max-w-screen-3xl m-auto overflow-scroll snap-mandatory snap-x p-2'>
                {movies && movies.length && movies.map(movie => {
                    return <Card movie={movie} key={movie.id}/>
                })}
            </div>
        </div>
    );
}

export default List;