import React, { useState } from 'react';
import styles from './Searchbar.module.css'; // Ensure to include the CSS for styling
import searchIcon from "../../assets/search_icon.svg";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const expand = () => {
    setExpanded(!expanded);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        id="searchInput"
        className={`${styles.searchInput} ${expanded ? styles.expanded : ''}`}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        id="searchBtn"
        className={`${styles.searchBtn} ${expanded ? styles.close : ''}`}
        onClick={expand}
      >
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchComponent;



