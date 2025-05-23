import { Link } from 'react-router-dom';
import renderStars from '../utils/renderStars';

export default function MovieItem({ movie }) {
  const { title, director, release_year, abstract, imagePath, average_vote } = movie;

  return (
    <div className='card'>
      <img src={imagePath} className='card-img-top' alt={title} style={{ height: '30rem', width: 'auto', objectFit: 'cover' }} />
      <div className='card-body'>
        <h5 className='card-title'>{title} ({release_year})</h5>
        <i>Regista: {director}</i>
        <div>{renderStars(average_vote)} ({average_vote})</div>
        <p className='card-text my-2' style={{ maxHeight: '3rem', overflowY: 'auto' }}>{abstract}</p>
        <Link to={`/movies/${movie.id}`} className='btn btn-primary'>Più dettagli</Link>
      </div>
    </div>
  );
};