import React, { useState, useEffect } from "react";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import axios from "axios";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:8000/api/titles/favorite/", {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setMovies(response.data);
      });
  }, []);
  return (
    <div className="fave-movies">
      <div className="fave">
      <h1>Movies you like</h1>
      <ul className="cards">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Favorites;