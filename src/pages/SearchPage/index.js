import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axiosInstance from "../../api/axios";
import './SearchPage.css';
import useDebounce from "../../hooks/useDebounce";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () =>{
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get('q');
  const debouncedSearchTerm = useDebounce(searchTerm,500);

  const navigate = useNavigate();

  const fetchSearchMovie = async (searchTerm) =>{
    try{
      const response = await axiosInstance.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    }catch (err){
      alert(err);
    }
  }

  useEffect(() => {
    if(debouncedSearchTerm){
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);


  if(searchResults.length > 0){
    return (
      <section className="search-container">
        {searchResults.map((movie)=>{
          if(movie.backdrop_path !== null && movie.media_type !== "person"){
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div className="movie__column-poster" onClick={()=> navigate(`/${movie.id}`)}>
                  <img src={movieImageUrl} alt="movie" className="movie__poster"/>
                </div>

              </div>
            )
          }
        })}
      </section>
    )
  }else{
    return (
      <section className="no-results">
        <div className="no-results__text">
          <p>
            찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    )
  }

  return (
    <div>

    </div>
  );
}

export default SearchPage;