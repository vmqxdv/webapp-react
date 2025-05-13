import { Link } from 'react-router-dom';

export default function MovieItem({ movie }) {
  return (
    <li>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  );
}
