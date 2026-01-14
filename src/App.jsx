import { useState } from "react";
import MovieItem from "./components/MovieItem";

const GENRES = ["Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance"];

function App() {
  //Movies list
  const [movies, setMovies] = useState([]);

  //Form inputs
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState(GENRES[0]);

  //Filter state
  const [filter, setFilter] = useState("All");

  
  const totalMovies = movies.length; // counts (derived from movies)
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = movies.filter((m) => !m.watched).length;

  
  const filteredMovies = movies.filter((m) => { // filter movies based on selected filter
    if (filter === "Watched") return m.watched;
    if (filter === "Unwatched") return !m.watched;
    return true;
  });

  //add new movie
  function handleAddMovie(e) {
    e.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newMovie = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      genre,
      watched: false,
    };

    setMovies((prev) => [newMovie, ...prev]);
    setTitle("");
    setGenre(GENRES[0]);
  }

  // toggle status
  function handleToggleWatched(id) {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, watched: !m.watched } : m
      )
    );
  }

  //delete movie
  function handleDelete(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Week 2: Movie Watchlist Manager</h1>

      {/* Add movie form */}
      <form onSubmit={handleAddMovie}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter movie title"
            />
          </label>
        </div>

        <div>
          <label>
            Genre:
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              {GENRES.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit" disabled={!title.trim()}>
          Add Movie
        </button>
      </form>

      {/*Filter buttons*/}
      <div>
        <strong>Filter:</strong>{" "}
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Watched")}>Watched</button>
        <button onClick={() => setFilter("Unwatched")}>Unwatched</button>
      </div>

      {/*movie summary*/}
      <p>
        Total: {totalMovies} | Watched: {watchedCount} | Unwatched:{" "}
        {unwatchedCount}
      </p>

      {totalMovies > 0 && watchedCount === totalMovies && (
        <p>You watched everything!</p>
      )}

      {/*movie list*/}
      <h2>Movies</h2>

      {filteredMovies.length === 0 ? (
        <p>No movies found. Add one!</p>
      ) : (
        <ul>
          {filteredMovies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onToggleWatched={handleToggleWatched}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
