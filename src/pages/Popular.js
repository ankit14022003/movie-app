import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

export default function Popular() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743"
    )
    .then(res => setMovies(res.data.results));
  }, []);

  return (
    <div className="container mt-3">
      <h2>Popular Movies</h2>

      <div className="movie-grid">
        {movies.slice(0, 18).map(m => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
}