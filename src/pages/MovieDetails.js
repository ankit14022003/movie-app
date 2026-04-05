import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function MovieDetails() {

  let { id } = useParams();
  let navigate = useNavigate();

  let [movie, setMovie] = useState({});
  let [cast, setCast] = useState([]);

  useEffect(() => {

    // Movie Details API
    axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743`
    )
    .then(res => setMovie(res.data));

    // Cast API
    axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743`
    )
    .then(res => setCast(res.data.cast));

  }, [id]);

  return (
    <div className="container mt-4">

      {/* MOVIE SECTION */}
      <div className="row">

        {/* Poster */}
        <div className="col-md-4">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/300x450"
            }
            className="img-fluid rounded"
            alt="movie"
          />
        </div>

        {/* Details */}
        <div className="col-md-8">
          <h2>{movie.title}</h2>

          <p><strong>Overview:</strong> {movie.overview}</p>

          <p>
            <strong>Rating:</strong> ⭐ {movie.vote_average}
          </p>

          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
        </div>

      </div>

      <hr />

      {/* CAST SECTION */}
      <h3>Top Cast</h3>

      <div className="d-flex flex-wrap">

        {cast.slice(0, 10).map(c => (
          <div
            key={c.id}
            className="m-2 text-center"
            style={{ cursor: "pointer", width: "120px" }}
            onClick={() => navigate(`/actor/${c.id}`)}
          >
            <img
              src={
                c.profile_path
                  ? `https://image.tmdb.org/t/p/w200${c.profile_path}`
                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              className="img-fluid rounded"
              alt="cast"
              style={{ height: "150px", objectFit: "cover" }}
            />

            <p style={{ fontSize: "14px" }}>{c.name}</p>
          </div>
        ))}

      </div>

    </div>
  );
}