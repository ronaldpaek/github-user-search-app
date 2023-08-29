import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ setUser }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUserData = async (username) => {
    const apiUrl = `https://api.github.com/users/${username}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok && data && data.login) {
        setUser(data);
      } else {
        console.error(
          `Failed to find a valid user. HTTP Status: ${response.status}`,
        );
      }
    } catch (error) {
      console.error(
        "An error occurred while fetching the GitHub user data:",
        error.message,
      );
    }
  };

  const handleSearchClick = () => {
    fetchUserData(searchQuery);
  };
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <img className="search-icon" src="/icon-search.svg" alt="Search icon" />
        <input
          className="search-input truncate-text"
          type="search"
          value={searchQuery}
          name="q"
          placeholder="Search GitHub username..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default SearchBar;
