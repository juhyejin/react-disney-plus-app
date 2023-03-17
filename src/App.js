import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";


function App() {

  const Layout = () =>{
    return (
      <div>
        <Nav/>
        <Outlet/>
      </div>
    )
  }

  return (
    <div>
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route index element={<LoginPage/>}/>
          <Route path="main" element={<MainPage/>}/>
          <Route path=":movieId" element={<DetailPage/>} />
          <Route path="search" element={<SearchPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
