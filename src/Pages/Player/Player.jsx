

import styles from  './Player.module.css';

import back_arrow from '../../assets/back_arrow_icon.png';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../assets/netflix-intro.gif'
const Player = () => {
  const [load,setLoad] =useState(false)
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmVhOGQ2NzA4YjM1NzJmYmE2MzA2OWVhOGM2YmVhMyIsIm5iZiI6MTcyMDI4NDM4NC40MjQyMzEsInN1YiI6IjY2ODk3MzRhZDllYjczMzUxMDFkMTVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RKF998M-eavQ9IPulVup3G9-ggK5jszaMZCB6op_kAw'
    }
  };

  useEffect(() => {
    setLoad(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0])) // use the first video for demonstration
      .catch(err => console.error(err));
      setLoad(false)
  }, [id]);

  return (
  <div className={styles.player}>
      <img onClick={() => navigate('/')} src={back_arrow} alt="Back" />
      {apiData.key ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${apiData.key}`}
            width={"100%"}
            height={"100%"}
            title='trailer'
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className={styles.playerInfo}>
            <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : "Unknown Date"}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
          </div>
        </>
      ) : (
        <div className={styles.loginSpinner}><img src={Loader} alt="" /></div>
      )}
    </div>
  );
}

export default Player;
