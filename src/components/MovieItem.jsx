function MovieItem({ movie, onToggleWatched, onDelete }) {
  return (
    <li className="movie-item">
      <div>
        <strong>{movie.title}</strong> — {movie.genre} —{" "}
        {movie.watched ? "Watched ✔️" : "Unwatched ⏳"}
      </div>

      <button onClick={() => onToggleWatched(movie.id)}>
        Toggle Watched
      </button>
      <button onClick={() => onDelete(movie.id)}>Delete</button>
    </li>
  );
}
 export default MovieItem;
