
import styles from '../../Pages/Home/Home.module.css'
import hero_banner from '../../assets/sex_edu.jpg'
import hero_title from '../../assets/Sex-education.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/Titlecards/TitleCards'
import Cards from './Cards'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'


const Tvshows = () => {
  return (
    <div className={styles.home}>
      
      <Navbar/>
    <div className={styles.hero}>
      <img src={hero_banner} alt="" className={styles.bannerImg}/>
      <div className={styles.heroCaption}>
        <img src={hero_title} alt=""  className={styles.captionImg}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis paria</p>
        <div className={styles.heroBtns}>
     
     
     
     
     <a href="https://www.youtube.com/embed/Hj0r9vi7dmU?si=txeTy3h14sjlCrFi" >
     <button className={styles.btn}><img src={play_icon} alt="" />Play</button>
     </a>
     
      
          <button className={`${styles.btn} ${styles.darkBtn}`}><img src={info_icon} alt="" />More info</button>
        </div>
      
      </div>
    </div>
    <div className={styles.moreCards}>
    <Cards title={"on_the_air"} category={"on_the_air"}/>
    <Cards title={"popular"} 
    category={"popular"}/>
    <Cards title={"top_rated"} 
    category={"top_rated"}/>
    </div>
    <Footer/>
    </div>
  )
}

export default Tvshows
