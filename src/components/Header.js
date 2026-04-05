import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  let [search, setSearch] = useState("");
  let navigate = useNavigate();

  function handleSearch() {
    if (search.trim() !== "") {
      navigate(`/search/${search}`);
    }
  }

  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <Link className="navbar-brand text-white" to="/">MovieApp</Link>

      <div>
        <Link className="btn btn-outline-light me-2" to="/">Home</Link>
        <Link className="btn btn-outline-light me-2" to="/popular">Popular</Link>
        <Link className="btn btn-outline-light me-2" to="/top-rated">Top Rated</Link>
        <Link className="btn btn-outline-light me-2" to="/upcoming">Upcoming</Link>
      </div>

      <div>
        <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search..." />
        <button onClick={handleSearch} className="btn btn-warning ms-2">Search</button>
      </div>
    </nav>
  );
}