import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }) {
  let navigate = useNavigate();

  return (
    <div className="card m-2 movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <div className="card-body">
        <h6 className="text-white fw-bold">{movie.title}</h6>
        <button className="btn btn-primary"
        onClick={() => navigate(`/movie/${movie.id}`)}>Details</button>
      </div>
    </div>
  );
}