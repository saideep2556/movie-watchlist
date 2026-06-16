import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetail = ( {handleWatchlist} ) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const { imdbID } = useParams();
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const apiUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setMovieDetail(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [imdbID]);

  const handleClick = () => {
    handleWatchlist(movieDetail);
  }
  

  if (loading) return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white text-2xl">
      Loading...
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Back link */}
      <div className="px-6 pt-6">
        <Link to="/" className="text-sm text-zinc-400 hover:text-white transition">
          ← Back to Search
        </Link>
      </div>

      {/* Hero section */}
      <div className="flex flex-col md:flex-row gap-10 px-6 py-10 max-w-5xl mx-auto">

        {/* Poster */}
        <div className="shrink-0">
          {movieDetail.Poster !== 'N/A' ? (
            <img
              src={movieDetail.Poster}
              alt={movieDetail.Title}
              className="w-56 rounded-lg shadow-2xl"
            />
          ) : (
            <div className="w-56 h-80 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 text-sm">
              No Poster
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">

          {/* Title + year */}
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              {movieDetail.Title}
            </h1>
            <p className="text-zinc-400 mt-1 text-sm">
              {movieDetail.Year} · {movieDetail.Rated} · {movieDetail.Runtime}
            </p>
          </div>

          {/* Genre tags */}
          <div className="flex flex-wrap gap-2">
            {movieDetail.Genre?.split(', ').map(g => (
              <span key={g} className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-full">
                {g}
              </span>
            ))}
          </div>

          {/* IMDb rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">⭐</span>
            <span className="text-2xl font-bold">{movieDetail.imdbRating}</span>
            <span className="text-zinc-500 text-sm">/ 10 · {movieDetail.imdbVotes} votes</span>
          </div>

          {/* Plot */}
          <p className="text-zinc-300 leading-7 max-w-xl">
            {movieDetail.Plot}
          </p>

          {/* Add to Watchlist button */}
          <button onClick={() => handleClick()} className="mt-2 w-fit bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition cursor-pointer">
            + Add to Watchlist
          </button>

        </div>
      </div>

      {/* Details grid */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <hr className="border-zinc-800 mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">

          <div>
            <p className="text-zinc-500 mb-1">Director</p>
            <p className="text-white">{movieDetail.Director}</p>
          </div>
          <div>
            <p className="text-zinc-500 mb-1">Writers</p>
            <p className="text-white">{movieDetail.Writer}</p>
          </div>
          <div>
            <p className="text-zinc-500 mb-1">Cast</p>
            <p className="text-white">{movieDetail.Actors}</p>
          </div>
          <div>
            <p className="text-zinc-500 mb-1">Language</p>
            <p className="text-white">{movieDetail.Language}</p>
          </div>
          <div>
            <p className="text-zinc-500 mb-1">Country</p>
            <p className="text-white">{movieDetail.Country}</p>
          </div>
          <div>
            <p className="text-zinc-500 mb-1">Box Office</p>
            <p className="text-white">{movieDetail.BoxOffice || 'N/A'}</p>
          </div>
          <div>
            <p className="text-zinc-500 mb-1">Released</p>
            <p className="text-white">{movieDetail.Released}</p>
          </div>
          <div>
            <p className="text-zinc-500 mb-1">Awards</p>
            <p className="text-white">{movieDetail.Awards}</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default MovieDetail;