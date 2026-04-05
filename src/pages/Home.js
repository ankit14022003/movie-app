import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

export default function Home() {

  let [movies, setMovies] = useState([]);
  let [page, setPage] = useState(1);

  useEffect(() => {

    // Popular Movies
    let popular = axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&page=${page}`
    );

    // Romantic Movies (Genre ID = 10749)
    let romantic = axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=c45a857c193f6302f2b5061c3b85e743&with_genres=10749&page=${page}`
    );

    Promise.all([popular, romantic])
      .then(([popRes, romRes]) => {

        // Merge both
        let combined = [...romRes.data.results, ...popRes.data.results];
        combined.sort((a, b) => b.vote_average - a.vote_average);

        // Optional: remove duplicates
        let unique = Array.from(new Map(combined.map(m => [m.id, m])).values());

        setMovies(unique);
      });

  }, [page]);

  function nextPage() {
    setPage(prev => prev + 1);
  }

  function prevPage() {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  }

  return (
    <div className="container mt-3">
      <h2>Movies</h2>

      <div className="movie-grid">
        {movies.slice(0, 18).map(m => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>

      {/* Pagination */}
      <div className="text-center mt-4">
        <button
          onClick={prevPage}
          className="btn btn-secondary me-2"
          disabled={page === 1}
        >
          ⬅ Previous
        </button>

        <span className="mx-3 fw-bold">Page {page}</span>

        <button
          onClick={nextPage}
          className="btn btn-warning"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}