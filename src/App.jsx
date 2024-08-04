import "./index.css";
import Home from "./Pages/Home/Home";
import { Routes, Route, useNavigate, Router } from "react-router-dom";
import Login from "../src/Pages/Login/Login";
import Player from "./Pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tvshows from "./Components/Tvshows/Tvshows";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { FavoritesProvider } from "./store/Store";
import Favorites from "./Components/Favorites/Favorites";
import TvPlayer from "./Components/Tvshows/TvPlayer";


import SearchResults from "./Components/Navbar/SearchResults";

function App() {
const navigate = useNavigate()
  useEffect(()=>{
      onAuthStateChanged(auth,async (user)=>{
        if(user){
          console.log('loggedIn');
          navigate('/')
        }else{
          console.log('logged Out');
          navigate('/login')
        }
      })
  },[])
  return (
    <>
   
   <FavoritesProvider>
  
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />}/>
     
    
        <Route path="/login" element={<Login />}/>
        <Route path="/player/:id" element={<Player  />} />
        <Route path="/Tvshows" element={<Tvshows/>} />
        <Route path="/Tvplayer/:id" element={<TvPlayer/>} />
        <Route path="/Favorites" element={<Favorites/>} />
        <Route path="/search" element={<SearchResults/>} />
      </Routes>
      
      </FavoritesProvider>
    </>
  );
}

export default App;