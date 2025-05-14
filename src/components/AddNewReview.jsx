import { useState } from 'react';
import axios from 'axios';

export default function AddNewReview({ movieId }) {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const addReview = (e) => {
    e.preventDefault();

    const reviewObj = {
      name: author,
      text: text,
      vote: rating
    };

    axios.post(`http://localhost:1229/movies/${movieId}/reviews`, reviewObj)
      .then(response => {
        console.log('Review added:', response.data);
        setAuthor('');
        setText('');
        setRating(0);
        setHoverRating(0);
      })
      .catch(err => console.log(err));
  };

  const RenderReviewStars = () => {
    const current = hoverRating !== 0 ? hoverRating : rating;
    return [
      ...Array(current).fill(true),
      ...Array(5 - current).fill(false)
    ].map((filled, i) => (
      <span
        key={i + 1}
        className={filled ? 'text-warning' : 'text-secondary'}
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => setHoverRating(i + 1)}
        onMouseLeave={() => setHoverRating(0)}
        onClick={() => setRating(i + 1)}
      >
        <i className={filled ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
      </span>
    ));
  };

  return (
    <div>
      <form onSubmit={addReview}>
        <div className='mb-3'>
          <label htmlFor='review_author_name' className='form-label'>Nome</label>
          <input type='text' className='form-control' id='review_author_name' placeholder='Mario...' value={author} onChange={e => setAuthor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Valutazione</label>
          <div style={{ fontSize: '2rem' }}>
            <RenderReviewStars />
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='review_text' className='form-label'>Commento</label>
          <textarea className='form-control' id='review_text' rows='3' value={text} onChange={e => setText(e.target.value)}></textarea>
        </div>
        <div>
          <button type='submit' className='btn btn-primary mb-3'>Invia</button>
        </div>
      </form>
    </div>
  );
}