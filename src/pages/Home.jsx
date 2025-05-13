import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1229/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container'>
      <h1>Lista dei Film</h1>
      <MovieList movies={movies} />
    </div>
  );
};