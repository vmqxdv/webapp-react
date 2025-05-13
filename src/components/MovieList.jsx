import MovieItem from './MovieItem';

export default function MovieList({ movies }) {
  const movieList = movies.map((movie) => (
    <div className='col' key={movie.id}>
      <MovieItem movie={movie} />
    </div>
  ));

  return (
    <div className='row row-cols-1 row-cols-md-3 g-4 mb-5'>
      {movieList}
    </div>
  );
};