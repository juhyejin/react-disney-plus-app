import React, {useCallback, useEffect, useRef, useState} from 'react';
import axiosInstance from "../api/axios";
import './Row.css'

const Row = ({title, id, fetchUrl}) => {

  const [movies, setMovies] = useState([]);
  const scrollEl = useRef(null);

  const fetchMovieData = useCallback(async () =>{
    const response = await axiosInstance.get(fetchUrl);
    setMovies(response.data.results);
  },[fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const clickArrowSlideMovie = (direction) => {
    if(direction === "left"){
      scrollEl.current.scrollLeft -= window.innerWidth - 80 ;
    }else{
      scrollEl.current.scrollLeft += window.innerWidth - 80 ;
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow" onClick={()=>clickArrowSlideMovie("left")}>{"<"}</span>
        </div>
        <div ref={scrollEl} id={id}  className="row__posters">
          {movies.map(movie => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow" onClick={()=>clickArrowSlideMovie()}>{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default Row;
