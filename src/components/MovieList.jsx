import MovieItem from './MovieItem';

export default function MovieList({ movies }) {
  const MovieList = movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <ul>
      {MovieList}
    </ul>
  );
}
