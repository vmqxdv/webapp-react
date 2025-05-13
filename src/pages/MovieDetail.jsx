import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:1229/movies/${id}`)
      .then((response) => {
        setMovie(response.data)
        console.log(response);
      })
      .catch((error) => console.error('Errore nel recupero del film:', error));
  }, [id]);

  console.log(movie);

  // return (
  //   // <div>
  //   //   <h1>{movie.title}</h1>
  //   //   <div>{movie.abstract}</div>
  //   // </div>
  // );
};