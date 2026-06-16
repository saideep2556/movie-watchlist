import { Link } from "react-router-dom"

const SearchResult = ({ movieList, loading, error }) => {
  if (loading) return (
    <p className="text-center text-zinc-400 mt-20 text-lg">Searching...</p>
  )
  if (error) return (
    <p className="text-center text-red-400 mt-20">{error}</p>
  )
  if (!movieList) return (
    <div className="text-center text-zinc-600 mt-32">
      <p className="text-5xl mb-4">🎬</p>
      <p className="text-lg">Search for a movie to get started</p>
    </div>
  )
  if (!movieList.Search) return (
    <p className="text-center text-zinc-400 mt-20">No results found.</p>
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      {/* Result count */}
      <p className="text-zinc-500 text-sm mb-6">
        {movieList.totalResults} results found
      </p>

      {/* Results list */}
      <div className="flex flex-col gap-4">
        {movieList.Search.map((movie) => (
          <Link
            to={`/${movie.imdbID}`}
            key={movie.imdbID}
            className="flex gap-5 bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-xl p-4 group"
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
            <div className="flex flex-col justify-center gap-2">
              <div className="flex items-baseline gap-3">
                <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                  {movie.Title}
                </h3>
                <span className="text-zinc-500 text-sm">{movie.Year}</span>
              </div>
              <span className="w-fit px-2 py-0.5 bg-zinc-700 text-zinc-300 text-xs rounded capitalize">
                {movie.Type}
              </span>
            </div>

            {/* Arrow */}
            <div className="ml-auto flex items-center text-zinc-600 group-hover:text-yellow-400 transition-colors">
              →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SearchResult