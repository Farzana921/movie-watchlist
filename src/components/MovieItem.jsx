function MovieItem({ movie, onToggleWatched, onDelete }) {
  return (
    <li style={{ marginBottom: 10 }}>
      <div>
        <strong>{movie.title}</strong> — {movie.genre} —{" "}
        <span>
          {movie.watched ? "Watched ✔️" : "Unwatched ⏳"}
        </span>
      </div>

      <div style={{ marginTop: 6 }}>
        <button onClick={() => onToggleWatched(movie.id)}>
          Toggle Watched
        </button>{" "}
        <button onClick={() => onDelete(movie.id)}>Delete</button>
      </div>
    </li>
  );
}

export default MovieItem;

