import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchSearchData, MovieData } from "../API";
import MovieCardList from "../components/MovieCardList/MovieCardList";
import SearchBox from "../components/SearchBox/SearchBox";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movieCardsData, setMovieCardsData] = useState<MovieData[]>([]);

  const onSearch = async (searchString: string) => {
    const data = await fetchSearchData(searchString);
    setMovieCardsData(data);
  };

  return (
    <div>
      <SearchBox
        searchInput={searchInput}
        setMovieCardsData={setMovieCardsData}
        setSearchInput={setSearchInput}
        searchButton={
          <button className="btn-search" onClick={() => onSearch(searchInput)}>
            <FaSearch />
          </button>
        }
      />
      <div>{movieCardsData[0] && <MovieCardList data={movieCardsData} />}</div>
    </div>
  );
};

export default Home;
