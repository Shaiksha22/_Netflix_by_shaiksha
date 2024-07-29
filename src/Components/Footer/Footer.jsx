
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
const Footer = () => {
  return (
    <div className='footer'>Footer
    
    <div className="footer-icons">
     <img src={youtube_icon} alt="" />
     <img src={twitter_icon} alt="" />
     <img src={instagram_icon} alt="" />

    </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Centere</li>
      <li>Gift Cards</li>
      <li>Media Centere</li>
      <li>Investor Relations</li>
 
      <li>Terms of Use</li>


    </ul>
    <p className='copyright-text'>© 2024 Netflix Clone, Inc.</p>
    
    
    
    </div>
  )
}

export default Footer