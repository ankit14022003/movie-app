import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ActorDetails() {

  let { id } = useParams();
  let [actor, setActor] = useState(null);

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=c45a857c193f6302f2b5061c3b85e743`
    )
    .then(res => setActor(res.data))
    .catch(() => setActor({}));
  }, [id]);

  // ✅ Loading
  if (!actor) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  // ✅ No data case
  if (!actor.name) {
    return (
      <div className="text-center mt-5">
        <h2>⚠ Actor details not available</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <div className="row">

        {/* Image */}
        <div className="col-md-4 text-center">
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            onError={(e) => {
              e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
            }}
            className="img-fluid rounded"
            alt="actor"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Details */}
        <div className="col-md-8">
          <h2>{actor.name}</h2>

          <p>
            <strong>Birthday:</strong>{" "}
            {actor.birthday || "Not Available"}
          </p>

          <p>
            <strong>Popularity:</strong>{" "}
            {actor.popularity || "N/A"}
          </p>

          <p>
            <strong>Biography:</strong><br />
            {actor.biography
              ? actor.biography
              : "No biography available for this actor."}
          </p>
        </div>

      </div>

    </div>
  );
}