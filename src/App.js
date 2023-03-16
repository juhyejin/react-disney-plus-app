import './App.css';
import styled from 'styled-components'
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
        <Banner/>
        <Category/>
      </Container>
    </div>
  );
}

export default App;


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