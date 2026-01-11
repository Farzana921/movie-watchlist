import { useState } from "react";
import MovieItem from "./components/MovieItem";

const GENRES = ["Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance"];

function App() {
  // 1) State: movies list
  const [movies, setMovies] = useState([]);

  // 2) State: form values
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState(GENRES[0]);

  // 3) State: filter
  const [filter, setFilter] = useState("All"); // "All" | "Watched" | "Unwatched"

  // Derived State (do NOT put these in useState)
  const totalMovies = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = movies.filter((m) => !m.watched).length;

  const filteredMovies = movies.filter((m) => {
    if (filter === "Watched") return m.watched;
    if (filter === "Unwatched") return !m.watched;
    return true; // All
  });

  // Add movie (event handler)
  function handleAddMovie(e) {
    e.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return; // simple validation

    const newMovie = {
      id: crypto.randomUUID(), // unique & stable id
      title: trimmedTitle,
      genre,
      watched: false,
    };

    setMovies((prev) => [newMovie, ...prev]);
    setTitle("");
    setGenre(GENRES[0]);
  }

  // Toggle watched
  function handleToggleWatched(id) {
    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, watched: !m.watched } : m))
    );
  }

  // Delete movie
  function handleDelete(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Week 2: Movie Watchlist Manager</h1>

      {/* 1) Add Movie Form */}
      <form onSubmit={handleAddMovie} style={{ marginTop: 16 }}>
        <div style={{ marginBottom: 8 }}>
          <label>
            Title:{" "}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter movie title"
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Genre:{" "}
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              {GENRES.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit">Add Movie</button>
      </form>

      {/* 2) Filter Controls */}
      <div style={{ marginTop: 20 }}>
        <strong>Filter: </strong>{" "}
        <button onClick={() => setFilter("All")}>All</button>{" "}
        <button onClick={() => setFilter("Watched")}>Watched</button>{" "}
        <button onClick={() => setFilter("Unwatched")}>Unwatched</button>
      </div>

      {/* 4) Summary (Derived State) */}
      <div style={{ marginTop: 16 }}>
        <p>
          <strong>Total:</strong> {totalMovies} | <strong>Watched:</strong>{" "}
          {watchedCount} | <strong>Unwatched:</strong> {unwatchedCount}
        </p>

        {/* Conditional Rendering option B */}
        {totalMovies > 0 && watchedCount === totalMovies && (
          <p>✔️ You watched everything!</p>
        )}
      </div>

      {/* 3) Movies List */}
      <div style={{ marginTop: 10 }}>
        <h2>Movies</h2>

        {/* Conditional Rendering option A */}
        {filteredMovies.length === 0 ? (
          <p>No movies found. Add one!</p>
        ) : (
          <ul>
            {filteredMovies.map((movie) => (
              <MovieItem
                key={movie.id} // stable key (not index)
                movie={movie}
                onToggleWatched={handleToggleWatched}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
