import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { fetchSearchData, MovieData } from "../../API";

const SearchBox = ({
  searchButton,
  searchInput,
  setMovieCardsData,
  setSearchInput,
}: {
  searchButton: ReactElement | string;
  searchInput: string;
  setMovieCardsData: Dispatch<SetStateAction<MovieData[]>>;
  setSearchInput: Dispatch<SetStateAction<string>>;
}) => {
  const [moviesData, setMoviesData] = useState<MovieData[]>([]);

  const onSearch = async (searchString: string) => {
    const data = await fetchSearchData(searchString);
    setMoviesData(data);
  };

  return (
    <div
      style={{ boxSizing: "border-box", maxWidth: "700px" }}
      className="m-auto p-4"
    >
      <div className="flex">
        <input
          type="text"
          className="w-full  text-sm"
          placeholder="Type movie name to search"
          value={searchInput}
          onChange={(e) => {
            onSearch(e.target.value);
            setSearchInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setMovieCardsData(moviesData);
              setMoviesData([]);
            }
          }}
        />
        {searchButton}
      </div>
      {!!moviesData[0] && (
        <div className="autocomplete-box">
          {moviesData.map((movie, i) => (
            <li key={i} onClick={() => console.log(movie.imdbID)}>
              {movie.Title}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
