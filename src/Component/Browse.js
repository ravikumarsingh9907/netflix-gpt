import Header from './Header';
import List from './List';
import { useSelector } from 'react-redux';
import VideoBanner from './VideoBanner';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearMovieDetails } from '../Utils/detailsSlice';

const Browse = () => {
  const dispatch = useDispatch();
  const { playingNowMovies, popularMovies, topRatedMovies } = useSelector((state) => state.movies);
  const index = playingNowMovies && Math.floor(Math.random() * playingNowMovies.length - 1) + 1;
  const movie = playingNowMovies && playingNowMovies[index];

  useEffect(() =>{
    dispatch(clearMovieDetails())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <Header />
      {movie && <VideoBanner movie={movie} />}
      <div className='mt-96 pt-40 z-0'>
        <List heading='Playing now' movies={playingNowMovies} />
        <List heading='Recommended movies' movies={popularMovies} />
        <List heading='Top rated movies' movies={topRatedMovies} />
      </div>
    </>
  )
}

export default Browse;