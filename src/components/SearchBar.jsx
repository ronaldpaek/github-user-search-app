import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ fetchUserData }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(searchQuery).then((message) => {
      if (message === null) {
        setSearchQuery("");
      } else if (searchQuery !== "") {
        setMessage(message);
      }
    });
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
  fetchUserData: PropTypes.func.isRequired,
};

export default SearchBar;
