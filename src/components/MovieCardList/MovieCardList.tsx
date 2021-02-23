import React from "react";
import { Link } from "react-router-dom";
import { MovieData } from "../..//API";

type Props = {
  data: MovieData[];
};

const MovieCardList: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((movie, i) => (
        <Link key={i} to={`movies/id=${movie.imdbID}`}>
          <div className="movie-card">
            <div className="card-cover">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieCardList;
