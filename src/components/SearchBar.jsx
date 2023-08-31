import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ setUser }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    setMessage(null);
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setMessage(null);
    }
  }, [searchQuery]);

  const fetchUserData = async (username) => {
    const apiUrl = `https://api.github.com/users/${username}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok && data && data.login) {
        setUser(data);
        setMessage(null);
        setSearchQuery("");
      } else {
        setMessage("No Results");
      }
    } catch (error) {
      setMessage("An error occurred while fetching the GitHub user data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(searchQuery);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div
        className="search-input-container"
        onClick={() => searchInputRef.current.focus()}
      >
        <img className="search-icon" src="/icon-search.svg" alt="Search icon" />
        <input
          className="search-input truncate-text"
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          name="q"
          placeholder="Search GitHub username..."
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setMessage(null);
          }}
        />
      </div>
      {message && <p className="message-toast">{message}</p>}
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default SearchBar;
