import { useState } from "react"
import SearchResult from "./SearchResult";

const SearchBar = () => {
    const [search , setSearch] = useState('');

    const [movieList , setMovieList] = useState(null);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
    
    const api_key = import.meta.env.VITE_MOVIE_API_KEY

    const fetchMovies = async (movie) => {
    setLoading(true);
    setError(null);
    const apiUrl = `https://www.omdbapi.com/?s=${movie}&apikey=${api_key}`
    try {
        const res = await fetch(apiUrl);
        if(!res.ok) {
        throw new Error('Movie not found')
        }
        const data = await res.json();
        setMovieList(data);
    } catch (e) {
        setError(e.message);
    } finally {
        setLoading(false);
    }
    }
      
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovies(search);
        setSearch('');
    }
  return (
    <>
        <form onSubmit={handleSubmit} className="form-container">
            <input 
                type="text" 
                className="form-input w-full items-center rounded-md bg-white/5 p-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
                placeholder="Enter Movie Name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}

            />
        </form>

        <SearchResult movieList = {movieList} loading={loading} error={error}/>


    </>
  )
}

export default SearchBar