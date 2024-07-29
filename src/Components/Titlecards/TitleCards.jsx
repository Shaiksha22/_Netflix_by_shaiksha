

// import React, { useRef, useEffect, useState, useContext } from "react";
// import styles from "./TitleCards.module.css";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { FavoritesContext } from "../../store/Store";

// const TitleCards = ({ title, category }) => {
//   const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
//   const cardsRef = useRef();
//   const [apiData, setApiData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmVhOGQ2NzA4YjM1NzJmYmE2MzA2OWVhOGM2YmVhMyIsIm5iZiI6MTcyMDMyMzk2OS4zMDQxODgsInN1YiI6IjY2ODk3MzRhZDllYjczMzUxMDFkMTVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WKvjJHE2bqpNoqT1SRyjTv5BOzHvZ79_bDMtpcf5vBQ",
//     },
//   };

//   const handleWheel = (event) => {
//     event.preventDefault();
//     cardsRef.current.scrollLeft += event.deltaY;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${
//             category ? category : "now_playing"
//           }?language=en-US&page=1`,
//           options
//         );
//         const data = await response.json();
//         setApiData(data.results);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();

//     if (cardsRef.current) {
//       cardsRef.current.addEventListener("wheel", handleWheel);
//     }

//     return () => {
//       if (cardsRef.current) {
//         cardsRef.current.removeEventListener("wheel", handleWheel);
//       }
//     };
//   }, [category]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={styles.titleCard}>
//       <h2>{title ? title : "Popular on Netflix"}</h2>
//       <div className={styles.cardList} ref={cardsRef}>
//         {apiData &&
//           apiData.map((card, index) => {
//             const isFavorite = favorites.some((fav) => fav.id === card.id);
//             return (
//               <div key={index} className={styles.card}>
//                 <Link to={`/player/${card.id}`}>
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
//                     alt=""
//                     style={{ width: "240px", borderRadius: "4px", cursor: "pointer" }}
//                   />
//                   <p>{card.original_title}</p>
//                 </Link>
//                 <button
//                   onClick={() =>
//                     isFavorite ? removeFavorite(card) : addFavorite(card)
//                   }
//                 >
//                   {isFavorite ? (
//                     <FaHeart className={styles.heartIcon} />
//                   ) : (
//                     <FaRegHeart className={styles.heartIcon} />
//                   )}
//                 </button>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default TitleCards;



import React, { useRef, useEffect, useState, useContext, useMemo } from "react";
import styles from "./TitleCards.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../store/Store";

const TitleCards = ({ title, category }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const cardsRef = useRef();
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const options = useMemo(() => ({
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmVhOGQ2NzA4YjM1NzJmYmE2MzA2OWVhOGM2YmVhMyIsIm5iZiI6MTcyMDMyMzk2OS4zMDQxODgsInN1YiI6IjY2ODk3MzRhZDllYjczMzUxMDFkMTVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WKvjJHE2bqpNoqT1SRyjTv5BOzHvZ79_bDMtpcf5vBQ",
    },
  }), []);

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!apiData) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${
              category ? category : "now_playing"
            }?language=en-US&page=1`,
            options
          );
          const data = await response.json();
          setApiData(data.results);
          setLoading(false);
        } catch (err) {
          console.error(err);
        }
      } else {
        setLoading(false);
      }
    };

    fetchData();

    if (cardsRef.current) {
      cardsRef.current.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category, apiData, options]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.titleCard}>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className={styles.cardList} ref={cardsRef}>
        {apiData &&
          apiData.map((card, index) => { 
            const isFavorite = favorites.some((fav) => fav.id === card.id);
            return (
              <div key={index} className={styles.card}>
                <Link to={`/player/${card.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                    alt=""
                   
                  />
                  <p>{card.original_title}</p>
                </Link>
                <button
                  onClick={() =>
                    isFavorite ? removeFavorite(card) : addFavorite(card)
                  }
                >
                  {isFavorite ? (
                    <FaHeart className={styles.heartIcon} />
                  ) : (
                    <FaRegHeart className={styles.heartIcon} />
                  )}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TitleCards;
