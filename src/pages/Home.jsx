import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1229/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  const movieList = movies.map((movie) => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Lista dei Film</h1>
      <ul>
        {movieList}
      </ul>
    </div>
  );
};