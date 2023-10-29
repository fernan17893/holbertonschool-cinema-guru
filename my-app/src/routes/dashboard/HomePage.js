import React, { useState, useEffect } from "react";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import Filter from "../../components/movies/Filter";
import Button from "../../components/general/Button";
import axios from "axios";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2023);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, sort, title]);

  const loadMovies = (page) => {
    const accessToken = localStorage.getItem("accessToken");
    const params = {
      minYear,
      maxYear,
      genres: genres.join(","),
      title,
      sort,
    };
    const options = {
      method: "GET",
      url: "http://localhost:8000/api/titles/advancedsearch",
      params: { page: page, ...params },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setMovies(response.data.titles);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="homepage">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        genres={genres}
        setGenres={setGenres}
        sort={sort}
        setSort={setSort}
        title={title}
        setTitle={setTitle}
      />
      <ul className="cards">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
      <Button onClick={handleLoadMore}>Load More..</Button>
    </div>
  );
};

export default HomePage;