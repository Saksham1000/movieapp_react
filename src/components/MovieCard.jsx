import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import { useNavigate } from "react-router-dom"

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const navigate = useNavigate()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        e.stopPropagation()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    function openMovieDetails() {
        navigate(`/movie/${movie.id}`)
    }

    function onCardKeyDown(e) {
        if (e.target !== e.currentTarget) return
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            openMovieDetails()
        }
    }

    return <div
        className="movie-card"
        role="link"
        tabIndex="0"
        onClick={openMovieDetails}
        onKeyDown={onCardKeyDown}
    >
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            
            {/* Always visible favorite button */}
            <button 
                className={`favorite-btn ${favorite ? "active" : ""}`} 
                onClick={onFavoriteClick}
                title={favorite ? "Remove from favorites" : "Add to favorites"}
                type="button"
            >
                <span className="heart-icon">{favorite ? "❤️" : "🤍"}</span>
            </button>
            
            {/* Always visible rating badge */}
            {movie.vote_average && (
                <div className="rating-badge">
                    <span className="rating-star">⭐</span>
                    <span>{movie.vote_average.toFixed(1)}</span>
                </div>
            )}
            
            {/* Enhanced overlay with more info */}
            <div className="movie-overlay">
                <div className="overlay-top">
                    <div className="movie-year">{movie.release_date?.split("-")[0] || "TBA"}</div>
                    {movie.genre_ids && movie.genre_ids.length > 0 && (
                        <div className="genre-indicator">{movie.genre_ids.length} genres</div>
                    )}
                </div>
                
                <div className="overlay-bottom">
                    <div className="movie-title-overlay">{movie.title}</div>
                    {movie.overview && (
                        <div className="movie-description">
                            {movie.overview.length > 120 ? 
                                `${movie.overview.substring(0, 120)}...` : 
                                movie.overview
                            }
                        </div>
                    )}
                    <div className="action-buttons">
                        <button className="play-btn" title="Watch movie" type="button" onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/movie/${movie.id}`, { state: { play: true } })
                        }}>
                            ▶️ Play
                        </button>
                        <button className="info-btn" title="More Info" type="button">
                            ℹ️ Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="movie-info">
            <h3 title={movie.title}>{movie.title}</h3>
            <div className="movie-meta">
                <span className="release-year">
                    📅 {movie.release_date?.split("-")[0] || "TBA"}
                </span>
                <span className="rating-info">
                    ⭐ {movie.vote_average?.toFixed(1) || "N/A"}/10
                </span>
            </div>
            {movie.overview && (
                <p className="movie-overview" title={movie.overview}>
                    {movie.overview.length > 80 ? 
                        `${movie.overview.substring(0, 80)}...` : 
                        movie.overview
                    }
                </p>
            )}
        </div>
    </div>
}

export default MovieCard
