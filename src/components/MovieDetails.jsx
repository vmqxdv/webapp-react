import renderStars from '../utils/renderStars';
import AddNewReview from './AddNewReview';

export default function MovieDetail({ movie }) {
  const { title, director, release_year, abstract, imagePath, average_vote, reviews } = movie;

  if (!reviews) return <div>Caricamento...</div>;

  const formatDate = date => {
    return new Date(date).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const renderReviewDate = (created, updated) => {
    if (created === updated) return formatDate(created);
    return formatDate(updated);
  };

  const reviewsList = reviews.map((rev, i) =>
    <li key={i} className='list-group-item'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{rev.name}</h5>
          <h6 className='card-subtitle mb-2'>{renderStars(rev.vote)}</h6>
          <p className='card-text'>{rev.text}</p>
          <div>{renderReviewDate(rev.created_at, rev.updated_at)}</div>
        </div>
      </div>
    </li>
  );


  return (
    <>
      <h2>{title}</h2>
      <div className='d-flex'>
        <div className='mx-3'><img src={imagePath} alt={title} style={{ maxWidth: '10rem' }} /></div>
        <div>
          <h3 className='mb-3'>Dettagli</h3>
          <div className='mb-4'>
            <div><b>Regista:</b> {director}</div>
            <div><b>Anno di uscita:</b> {release_year}</div>
            <div>{renderStars(average_vote)} ({average_vote})</div>
          </div>
          <div>
            <p>{abstract}</p>
          </div>
        </div>
      </div>

      <div>
        <ul>
          {reviewsList}
        </ul>
      </div>

      <AddNewReview movieId={movie.id} onReviewAdded={onReviewAdded} />
    </>
  )
};