










import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchResults.module.css"; // New CSS file for styling
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../store/Store";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const SearchResults = () => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmVhOGQ2NzA4YjM1NzJmYmE2MzA2OWVhOGM2YmVhMyIsIm5iZiI6MTcyMDcwODk1OS43MDg5MDUsInN1YiI6IjY2ODk3MzRhZDllYjczMzUxMDFkMTVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fyC24tLAhY13Q-K2efEdlIqaQOQsl4KDPip1jZmwOJU',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US&page=1&include_adult=false`,
          options
        );
        const data = await response.json();
        setResults(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchData();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.hero}>
        <Navbar />
        <img
          src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg"
          alt="Banner"
          className={styles.bannerImg}
        />
        <div className={styles.heroCaption}>
          <div className={styles.titleCard}>
            <h2>Search Results for {`'${query}'`}</h2>
            <div className={styles.cardList}>
              {results.map((result) => {
              
                const isFavorite = favorites.some((fav) => fav.id === result.id);
                return (
                  <div key={result.id} className={styles.card}>

                    <Link to={`/player/${result.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                        alt={result.title || result.name}
                        className={styles.cardImg}
                      />
                      <p className={styles.cardTitle}>{result.title || result.name}</p>
                    </Link>
                    <button
                      className={styles.favoriteButton}
                      onClick={() =>
                        isFavorite ? removeFavorite(result) : addFavorite(result)
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
