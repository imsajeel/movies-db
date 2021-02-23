import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchById, MovieDataDetailed } from "../API";
import MovieDetails from "../components/MovieDetails/MovieDetails";

type ErrorState = {
  error?: string;
};
const MoviePage = () => {
  const { id }: { id: string } = useParams();
  const [movieData, setMovieData] = useState<MovieDataDetailed>();
  const [error, setError] = useState<ErrorState>();

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchById(id);
      if (data.error) {
        setError(data);
      } else {
        setMovieData(data);
      }
    };
    fetchAPI();
  }, [id]);

  document.title =
    movieData?.Title + " (" + movieData?.Year + ") | MoviesDB" || "Not Found";

  if (!!error) {
    return <div>Error: {error.error}</div>;
  } else if (movieData?.Title) {
    return <MovieDetails data={movieData} />;
  } else {
    return <div>Loading......</div>;
  }
};

export default MoviePage;
