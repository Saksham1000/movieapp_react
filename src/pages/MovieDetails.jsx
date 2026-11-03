import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPlayer, setShowPlayer] = useState(Boolean(location.state?.play));

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true);
        setError(null);
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (err) {
        console.error("Error loading movie details:", err);
        setError("Movie information could not be loaded.");
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [movieId]);

  if (loading) {
    return (
      <div className="movie-details-state">
        <div className="loading-spinner"></div>
        <p>Loading movie information...</p>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="movie-details-state">
        <h1>Movie not found</h1>
        <p>{error || "There is no information available for this movie."}</p>
        <Link to="/" className="details-back-link">Back to movies</Link>
      </div>
    );
  }

  const favorite = isFavorite(movie.id);
  const releaseYear = movie.release_date?.split("-")[0] || "TBA";
  const runtime = formatRuntime(movie.runtime);
  const trailer = movie.videos?.results?.find(
    video => video.site === "YouTube" && video.type === "Trailer"
  );
  const cast = movie.credits?.cast?.slice(0, 8) || [];
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  function onFavoriteClick() {
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-details">
      <section
        className="details-hero"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 10, 18, 0.96), rgba(8, 10, 18, 0.72)), url(${backdropUrl})` }}
      >
        <div className="details-hero-content">
          <Link to="/" className="details-back-link">Back to movies</Link>

          <div className="details-layout">
            <img
              className="details-poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <div className="details-copy">
              <div className="details-kicker">{releaseYear} movie information</div>
              <h1>{movie.title}</h1>
              {movie.tagline && <p className="details-tagline">{movie.tagline}</p>}

              <div className="details-meta">
                <span>{releaseYear}</span>
                <span>{runtime}</span>
                <span>{movie.vote_average?.toFixed(1) || "N/A"}/10</span>
                <span>{movie.status || "Unknown status"}</span>
              </div>

              <div className="details-genres">
                {movie.genres?.map(genre => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>

              <p className="details-overview">{movie.overview || "No overview is available for this movie."}</p>

              <div className="details-actions">
                {movie.imdb_id && (
                  <button type="button" className="details-play-btn" onClick={() => {
                    setShowPlayer(true);
                    document.getElementById("movie-player")?.scrollIntoView({ behavior: "smooth" });
                  }}>
                    Watch movie
                  </button>
                )}
                <button type="button" className="details-favorite-btn" onClick={onFavoriteClick}>
                  {favorite ? "Remove from favorites" : "Add to favorites"}
                </button>
                {trailer && (
                  <a
                    className="details-trailer-link"
                    href={`https://www.youtube.com/watch?v=${trailer.key}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch trailer
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="movie-player" className="details-section" aria-label="Movie player">
        <h2>Watch movie</h2>
        {!movie.imdb_id ? (
          <p>Playback is unavailable because this movie has no IMDb ID.</p>
        ) : showPlayer ? (
          <div className="movie-player">
            <iframe
              src={`https://vidsrc.sh/embed/movie?imdb=${encodeURIComponent(movie.imdb_id)}`}
              title={`Watch ${movie.title}`}
              allow="fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <p>Select Watch movie to load the player.</p>
        )}
      </section>

      <section className="details-section">
        <h2>More Information</h2>
        <div className="details-facts">
          <div>
            <span>Original title</span>
            <strong>{movie.original_title || movie.title}</strong>
          </div>
          <div>
            <span>Release date</span>
            <strong>{movie.release_date || "TBA"}</strong>
          </div>
          <div>
            <span>Popularity</span>
            <strong>{movie.popularity ? Math.round(movie.popularity) : "N/A"}</strong>
          </div>
          <div>
            <span>Votes</span>
            <strong>{movie.vote_count?.toLocaleString() || "N/A"}</strong>
          </div>
        </div>
      </section>

      {cast.length > 0 && (
        <section className="details-section">
          <h2>Cast</h2>
          <div className="cast-list">
            {cast.map(person => (
              <div className="cast-item" key={person.cast_id || person.id}>
                <strong>{person.name}</strong>
                <span>{person.character}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function formatRuntime(minutes) {
  if (!minutes) return "Runtime N/A";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (!hours) return `${mins}m`;
  return `${hours}h ${mins}m`;
}

export default MovieDetails;
