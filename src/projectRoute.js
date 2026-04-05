import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import MovieDetails from "./pages/MovieDetails";
import Search from "./pages/Search";
import ActorDetails from "./pages/ActorDetails";

const projectRoute = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="top-rated" element={<TopRated />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="search/:name" element={<Search />} />
        <Route path="actor/:id" element={<ActorDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default projectRoute;