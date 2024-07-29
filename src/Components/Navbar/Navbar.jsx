




// import React, { useRef, useState, useEffect } from "react";
// import styles from "./Navbar.module.css";
// import logo from "../../assets/logo.png";
// import bell_icon from "../../assets/bell_icon.svg";
// import profile_img from "../../assets/profile_img.png";
// import caret_img from "../../assets/caret_icon.svg";
// import { logout } from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import Searchbar from "./Searchbar";
// import { FaBars } from 'react-icons/fa'; // Hamburger icon from react-icons

// const Navbar = () => {
//   const navigate = useNavigate();
//   const navRef = useRef();
//   const menuRef = useRef();
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 80) {
//         navRef.current.classList.add(styles.navDark);
//       } else {
//         navRef.current.classList.remove(styles.navDark);
//       }
//       setMenuOpen(false); // Close menu on scroll
//     };

//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div ref={navRef} className={styles.navbar}>
//       <div className={styles.navbarLeft}>
//         <img src={logo} alt="logo" className={styles.logo} />
//         <ul ref={menuRef} className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
//         <li className={styles.searchBar}><Searchbar /></li>
//           <li onClick={() => { navigate('/'); setMenuOpen(false); }}>Home</li>
//           <li onClick={() => { navigate('/Tvshows'); setMenuOpen(false); }}>TV Shows</li>
//           <li onClick={() => { navigate('/Favorites'); setMenuOpen(false); }}>My List</li>
         
//           <li className={styles.sign} onClick={() => { logout(); setMenuOpen(false); }}>Sign Out</li>
//         </ul>
//       </div>
//       <FaBars className={styles.hamburger} onClick={toggleMenu} />
//       <div className={`${styles.navbarRight} ${menuOpen ? styles.hide : ''}`}>
//         <Searchbar />
//         <img src={bell_icon} alt="notifications" className={styles.icons} />
//         <div className={styles.navbarProfile}>
//           <img src={profile_img} alt="profile" className={styles.profile} />
//           <img src={caret_img} alt="dropdown" />
//           <div className={styles.dropdown}>
//             <p onClick={() => { logout(); setMenuOpen(false); }}>Sign Out</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;







import React, { useRef, useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_img from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { FaBars } from 'react-icons/fa'; // Hamburger icon from react-icons

const Navbar = () => {
  const navigate = useNavigate();
  const navRef = useRef();
  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add(styles.navDark);
      } else {
        navRef.current.classList.remove(styles.navDark);
      }
      setMenuOpen(false); // Close menu on scroll
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
   
    setMenuOpen(!menuOpen);
    
  };
  

  return (
    <div ref={navRef} className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <img src={logo} alt="logo" className={styles.logo} />
        <ul ref={menuRef} className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li className={styles.searchBar}><Searchbar /></li>
          <li onClick={() => { navigate('/'); setMenuOpen(false); }}>Home</li>
          <li onClick={() => { navigate('/Tvshows'); setMenuOpen(false); }}>TV Shows</li>
          <li onClick={() => { navigate('/Favorites'); setMenuOpen(false); }}>My List</li>
          <li className={styles.sign} onClick={() => { logout(); setMenuOpen(false); }}>Sign Out</li>
        </ul>
      </div>
      
      <FaBars className={styles.hamburger} onClick={toggleMenu} />
      <div className={`${styles.navbarRight} ${menuOpen ? styles.hide : ''}`}>
        <Searchbar />
        <img src={bell_icon} alt="notifications" className={styles.icons} />
        <div className={styles.navbarProfile}>
          <img src={profile_img} alt="profile" className={styles.profile} />
          <img src={caret_img} alt="dropdown" />
          <div className={styles.dropdown}>
            <p onClick={() => { logout(); setMenuOpen(false); }}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;









