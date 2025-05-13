import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieDetails from '../components/MovieDetails';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:1229/movies/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error('Errore nel recupero del film:', error));
  }, [id]);

  return (
    <div className='container'>
      <MovieDetails movie={movie} />
    </div>
  );
};