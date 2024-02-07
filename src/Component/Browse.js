import Header from './Header';
import List from './List';
import { useSelector } from 'react-redux';
import VideoBanner from './VideoBanner';

const Browse = () => {
  const { playingNowMovies, popularMovies, topRatedSeries } = useSelector((state) => state.movies);
  const index = playingNowMovies && Math.floor(Math.random() * playingNowMovies.length - 1) + 1;
  const movie = playingNowMovies && playingNowMovies[index];

  return (
    <>
      <Header />
      {movie && <VideoBanner movie={movie} />}
      <div className='mt-96 pt-40 z-0'>
        <List heading='Playing now' movies={playingNowMovies} />
        <List heading='Recommended movies' movies={popularMovies} />
        <List heading={'Top rated TV series'} movies={topRatedSeries} />
      </div>
    </>
  )
}

export default Browse;