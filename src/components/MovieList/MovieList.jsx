import MovieCard from "../MovieCard/MovieCard";

export default function MovieList({ movies }) {
  return (
    <ul>
      {" "}
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard />
        </li>
      ))}
    </ul>
  );
}
