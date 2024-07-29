// // src/contexts/FavoritesContext.js

// import  { createContext, useState } from "react";

// export const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);
//   const [type, setType] = useState('movie');  // Initialize type here

//   const addFavorite = (movie) => {
//     setFavorites([...favorites, movie]);
//   };

//   const removeFavorite = (movie) => {
//     setFavorites(favorites.filter(fav => fav.id !== movie.id));
//   };

//   return (
//     <FavoritesContext.Provider value={{  favorites, addFavorite, removeFavorite ,type, setType }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from 'react';
import { auth, saveFavorites, loadFavorites } from '../firebase';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async (user) => {
      if (user) {
        const userFavorites = await loadFavorites(user.uid);
        setFavorites(userFavorites);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchFavorites(user);
      } else {
        setFavorites([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const addFavorite = async (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    if (auth.currentUser) {
      await saveFavorites(auth.currentUser.uid, updatedFavorites);
    }
  };

  const removeFavorite = async (movie) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
    setFavorites(updatedFavorites);
    if (auth.currentUser) {
      await saveFavorites(auth.currentUser.uid, updatedFavorites);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
