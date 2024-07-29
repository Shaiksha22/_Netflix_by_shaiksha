
import styles from './Home.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import hero_banner from '../../assets/prt.png';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../Components/Titlecards/TitleCards';
import Footer from '../../Components/Footer/Footer';









const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.hero}>
        <img src={hero_banner} alt="Hero Banner" className={styles.bannerImg} />
        <div className={styles.heroCaption}>
          <img src={hero_title} alt="Hero Title" className={styles.captionImg} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis paria</p>
          <div className={styles.heroBtns}>
           
           <a href="https://www.youtube.com/embed/80dqOwAOhbo?si=A-1B4RwHPposDhrS"> <button className={styles.btn}><img src={play_icon} alt="Play" />Play</button></a>
          
           



            <button className={`${styles.btn} ${styles.darkBtn}`}><img src={info_icon} alt="More Info" />More info</button>
          </div>
          <div className={styles.titleCards}>
            <TitleCards />
          </div>
        </div>
      </div>
      <div className={styles.moreCards}>
      <TitleCards type={"movie"} category={"top_rated"} title={"Blockbuster Movies"} />
        <TitleCards type={"movie"} category={"popular"} title={"Only on Netflix"} />
        <TitleCards type={"movie"} category={"upcoming"} title={"Upcoming"} />
        <TitleCards type={"movie"} category={"now_playing"} title={"Top Picks for You"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
