


// import styles from './Favorites.module.css'
// import  { useContext } from "react";
// import { Link } from "react-router-dom";
// import { FaHeart } from 'react-icons/fa';
// import { FavoritesContext } from "../../store/Store";

// import Footer from '../Footer/Footer';
// import sty from '../../Pages/Home/Home.module.css'
// import Navbar from '../../Components/Navbar/Navbar'
// import hero_banner from '../../../public/background_banner.jpg'


// const Favorites = () => {
//   const { favorites, removeFavorite } = useContext(FavoritesContext);

//   return (
//     <>  <Navbar />
//       <div className={styles.hero}>
      
//         <img src={hero_banner} alt="" className={styles.bannerImg} />
//         <div className={styles.heroCaption}>
//           <h1 className={styles.captionImg}>My Watchlist</h1>
//           <hr className={styles.hr}/>
//           {favorites.length === 0 && <h1>Please Add ur favorites </h1>}
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis paria</p>
//           <div className={styles.titleCards}>
//             <div className={styles.cardList}>
//               {favorites.map((movie, index) => (
//                 <div key={index} className={styles.card}>
//                   <Link to={`/player/${movie.id}`} >
//                     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
//                     <p>{movie.original_title}</p>
//                   </Link>
//                   <button onClick={() => removeFavorite(movie)}>
//                     <FaHeart className={styles.heartIcon }/>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
      
//       </div> 
//       <Footer/>
//     </>
//   );
// }

// export default Favorites;















// import styles from './Favorites.module.css'
// import  { useContext } from "react";
// import { Link } from "react-router-dom";
// import { FaHeart } from 'react-icons/fa';
// import { FavoritesContext } from "../../store/Store";

// import Footer from '../Footer/Footer';
// import sty from '../../Pages/Home/Home.module.css'
// import Navbar from '../../Components/Navbar/Navbar'
// import hero_banner from '../../../public/background_banner.jpg'


// const Favorites = () => {
//   const { favorites, removeFavorite } = useContext(FavoritesContext);

//   return (
//     <> 
//       <div className={styles.hero}>
//       <Navbar className={styles.nav} />
        
//         <div className={styles.heroCaption}>
//           <h1 >My Watchlist</h1>
//           <hr className={styles.hr}/>
//           {favorites.length === 0 && <h1>Please Add ur favorites </h1>}
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis paria</p>
//           <div className={styles.titleCard}>
//             <div className={styles.cardList}>
//               {favorites.map((movie, index) => (
//                 <div key={index} className={styles.card}>
//                   <Link to={`/player/${movie.id}`} >
//                     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
//                     <p>{movie.original_title}</p>
//                   </Link>
//                   <button onClick={() => removeFavorite(movie)}>
//                     <FaHeart className={styles.heartIcon }/>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
      
//       </div> 
//       <Footer/>
//     </>
//   );
// }

// export default Favorites;





import styles from './Favorites.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FavoritesContext } from '../../store/Store';
import Footer from '../Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <>
      <Navbar className={styles.nav} />
      <div className={styles.hero}>
        <div className={styles.heroCaption}>
          <h1>My Watchlist</h1>
          <hr className={styles.hr} />
          {favorites.length === 0 ? (
            <h2>Please add your favorites</h2>
          ) : (
            <>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis paria</p>
              <div className={styles.titleCard}>
                <div className={styles.cardList}>
                  {favorites.map((movie, index) => (
                    <div key={index} className={styles.card}>
                      <Link to={`/player/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                        <p>{movie.original_title ? movie.original_title : movie.name}</p>

                      </Link>
                      <button onClick={() => removeFavorite(movie)}>
                        <FaHeart className={styles.heartIcon} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
