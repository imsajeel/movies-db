export type MovieData = {
  Poster?: string;
  Title: string;
  Type?: string;
  Year?: string;
  imdbID?: string;
};

export const fetchSearchData = async (searchValue: string) => {
  const endpoint = `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`;
  const data = await (await fetch(endpoint)).json();
  if (data.Response === "True") {
    return data.Search;
  } else {
    return [];
  }
};
