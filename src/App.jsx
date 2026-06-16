import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainLayout from './layout/MainLayout'
import SearchBar from './components/SearchBar'
import MovieDetail from './components/MovieDetail';
import WatchList from './components/WatchList';
import './App.css'


//doing some changes

function App() {
  

  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist' , JSON.stringify(watchlist));
  },[watchlist]);

  const handleWatchlist = (movie) => {
    const alreadyAdded = watchlist.some(m => m.imdbID === movie.imdbID);
    if (alreadyAdded) return;
    setWatchlist([...watchlist, movie]);
  }

  const toggleMovie = (movie) => {
    const updateList = watchlist.map((m) => m.imdbID === movie.imdbID ? { ...m, watched: !m.watched } : m);
    setWatchlist(updateList);
  }

  const deleteMovie = (movie) => {
    const updatedList = watchlist.filter((m) => m.imdbID != movie.imdbID)
    setWatchlist(updatedList)
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<SearchBar />}></Route>
        <Route path='/:imdbID' element={<MovieDetail handleWatchlist={handleWatchlist}/>}></Route>
        <Route path='/watchlist' element={<WatchList watchlist={watchlist} toggleMovie={toggleMovie} deleteMovie={deleteMovie}/>}></Route>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
