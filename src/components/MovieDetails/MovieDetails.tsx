import React from "react";
import { MovieDataDetailed } from "../../API";

type Props = {
  data: MovieDataDetailed;
};

const MovieDetails: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>{data?.Title}</h1>
      Ratings :{" "}
      {data?.Ratings.map((rating, i) => (
        <li key={i}>{rating.Source + " " + rating.Value}</li>
      ))}
    </div>
  );
};

export default MovieDetails;
