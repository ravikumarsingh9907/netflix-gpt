const Card = ({ movie }) => {
    return (
        <div className="p-2 rounded">
            <img className='w-52 max-w-72 rounded drop-shadow-md' alt={movie.title} src={'https://image.tmdb.org/t/p/w780' + movie.poster_path} />
        </div>
    )
}

export default Card;