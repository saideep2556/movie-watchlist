const WatchList = ({ watchlist , toggleMovie , deleteMovie }) => {
  if (watchlist.length === 0) return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-center px-4">
      <p className="text-5xl mb-4">🎬</p>
      <h2 className="text-white text-2xl font-bold mb-2">Your watchlist is empty</h2>
      <p className="text-zinc-500 mb-6">Search for movies and add them to your watchlist</p>
      <a href="/" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
        Search Movies
      </a>
    </div>
  )

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Watchlist</h1>
          <span className="text-zinc-400 text-sm">{watchlist.length} movies</span>
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          {watchlist.map((movie) => (
            <div
              key={movie.imdbID}
              className="flex gap-5 bg-zinc-900 rounded-xl p-4"
            >
              {/* Poster */}
              <div className="shrink-0">
                {movie.Poster !== 'N/A' ? (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-16 h-24 object-cover rounded-lg shadow-md"
                  />
                ) : (
                  <div className="w-16 h-24 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 text-xs text-center px-1">
                    No Poster
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center gap-2 flex-1">
                <h3 className="text-white font-semibold text-lg">{movie.Title}</h3>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <span>{movie.Year}</span>
                  <span>·</span>
                  <span className="capitalize">{movie.Type}</span>
                  {movie.Runtime && <><span>·</span><span>{movie.Runtime}</span></>}
                </div>
                {movie.imdbRating && (
                  <p className="text-yellow-400 text-sm">⭐ {movie.imdbRating} / 10</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col justify-center gap-2 shrink-0">
                <button onClick={() => toggleMovie(movie)} className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-xs rounded-lg transition cursor-pointer">
                  {movie.watched ? '✓ Watched' : 'Mark Watched'}
                </button>
                <button onClick={() => deleteMovie(movie)} className="px-4 py-2 bg-zinc-700 hover:bg-red-600 text-white text-xs rounded-lg transition cursor-pointer">
                  Remove
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default WatchList