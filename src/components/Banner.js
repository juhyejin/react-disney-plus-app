import React, {useEffect, useState} from 'react';
import axiosInstance from '../api/axios';
import requests from "../api/request";
import styled from 'styled-components'
import "./Banner.css"

const Banner = () => {

  const [movie, setMovie] = useState([]);
  //비디오 버튼 클릭 했을때
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    //현재 상영중인 영화 목록 가져오기
    const response = await axiosInstance.get(requests.fetchNowPlaying)
    //여러 영화 중 하나의 영화 아이디를 가져오기
    //랜덤한 숫자 만들기
    const movieId = response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;
    //특정 영화의 더 상세한 정보를 가져오기(비디오정보도 포함)
    const {data: movieDetail} = await axiosInstance.get(`movie/${movieId}`,{
      params: {append_to_response: "videos"},
    });
    setMovie(movieDetail);
  }
  //문자열 짜르기
  const truncate = (str, n) =>{
    return str?.length > n ? str.substring(0,n) + "...": str;
  }

  if(isClicked){
    //플레이 버튼을 클릭했을때 보여질 화면
    return (
      <div className="videoFrame">
        <Container>
          <HomeContainer>
            <Iframe src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?
            controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            width="640" height="360" frameborder="0" allow="autoplay; fullscreen"> </Iframe>
          </HomeContainer>
        </Container>
        <button className="closeVideoBtn" onClick={()=>setIsClicked(false)}>X</button>
      </div>
    )
  }else{
    return (
      <header className="banner" style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover"
      }}>
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          {/* 앞에가 참이면 뒤에껄 실행 */}
          <div className="banner__btns">
            {movie?.videos?.results[0]?.key &&
              <button className="banner__btn play" onClick={()=> setIsClicked(true)}>
                Play
              </button>
            }
          </div>
          <p className="banner__description">
            {truncate(movie.overview,100)}
          </p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  }

};

export default Banner;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const HomeContainer = styled.div`
    width: 100%;
    height: 90vh;
`
const Iframe = styled.iframe`
  width: 100%;
  height:100%;
  opacity: .65;
  border:none;
  z-index: -1;
  
  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`