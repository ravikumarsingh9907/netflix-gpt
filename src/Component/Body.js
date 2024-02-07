import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import useFetchMovies from '../Hooks/useFetchMovies';
import { addPlayingNowMovies, addPopularMovies, addTopRatedSeries } from '../Utils/moviesSlice';

const Body = () => {
  useFetchMovies('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', addPlayingNowMovies);
  useFetchMovies('https://api.themoviedb.org/3/trending/all/day?language=en-US', addPopularMovies);
  useFetchMovies('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', addTopRatedSeries)

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body;