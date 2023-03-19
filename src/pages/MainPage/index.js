import React from 'react';
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import Row from "../../components/Row";
import requests from "../../api/request";
import styled from "styled-components";

const MainPage = () => {
  return (
    <div className="App">
      <Container>
        <Nav />
        <Banner/>
        <Category/>
        <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}/>
      </Container>
    </div>
  );
}

export default MainPage;


const Container = styled.main`
  position: relative;
  min-height: calc( 100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc( 3.5vw + 5px);
  
  &::after{
    content: "";
    background-image: url("/images/home-background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`