export type MovieData = {
  Poster?: string;
  Title: string;
  Type?: string;
  Year?: string;
  imdbID?: string;
};

type Rating = {
  Source: string;
  Value: string;
};

export type MovieDataDetailed = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
};

export const fetchSearchData = async (searchValue: string) => {
  const endpoint = `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`;
  const data = await (await fetch(endpoint)).json();
  if (data.Response === "True") {
    return data.Search;
  } else {
    return [];
  }
};

export const fetchById = async (imbdID: string) => {
  const endpoint = `https://www.omdbapi.com/?i=${imbdID}&apikey=${process.env.REACT_APP_API_KEY}`;
  const data = await (await fetch(endpoint)).json();
  if (data.Response === "True") {
    return data;
  } else {
    return { error: data.Error };
  }
};
