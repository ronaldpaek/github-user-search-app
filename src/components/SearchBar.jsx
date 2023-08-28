
const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <img className="search-icon" src="/icon-search.svg" alt="Search icon" />
        <input
          className="search-input truncate-text"
          type="search"
          name="q"
          placeholder="Search GitHub username..."
        />
      </div>
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
