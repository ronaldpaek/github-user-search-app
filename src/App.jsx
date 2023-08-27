import "./App.css";

const App = () => {
  return (
    <main className="github-search-container">
      <header className="app-header">
        <h1 className="app-title">devfinder</h1>
        <div className="theme-toggle">
          <p className="theme-label">Light</p>
          <img className="theme-icon" src="/icon-sun.svg" alt="Sun icon" />
        </div>
      </header>

      <div className="search-bar">
        <div className="search-input-container">
          <img
            className="search-icon"
            src="/icon-search.svg"
            alt="Search icon"
          />
          <input
            className="search-input truncate-text"
            type="search"
            name="q"
            placeholder="Search GitHub username..."
          />
        </div>
        <button className="search-button">Search</button>
      </div>

      <section className="user-section">
        <div className="user-card">
          <img className="user-avatar" src="/avatar.svg" alt="User avatar" />
          <div className="user-details">
            <h2 className="user-name">The Octocat</h2>
            <p className="user-handle">@octocat</p>
            <time className="joined-date" datetime="2011-01-25">
              Joined 25 Jan 2011
            </time>
          </div>
        </div>

        <p className="user-bio">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>

        <div className="user-stats">
          <div className="stat-item">
            <h3 className="stat-title">Repos</h3>
            <p className="stat-value">8</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-title">Followers</h3>
            <p className="stat-value">3938</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-title">Following</h3>
            <p className="stat-value">9</p>
          </div>
        </div>

        <div className="user-contact-details">
          <div className="contact-item">
            <img
              className="contact-icon"
              src="/icon-location.svg"
              alt="Location"
            />
            <p className="contact-info">San Francisco</p>
          </div>
          <div className="contact-item">
            <img
              className="contact-icon"
              src="/icon-website.svg"
              alt="Website"
            />
            <a className="contact-info" href="#">
              https://github.blog
            </a>
          </div>
          <div className="contact-item">
            <img
              className="contact-icon"
              src="/icon-twitter.svg"
              alt="Twitter"
            />
            <p className="contact-info">Not Available</p>
          </div>
          <div className="contact-item">
            <img
              className="contact-icon"
              src="/icon-company.svg"
              alt="Company"
            />
            <p className="contact-info">@github</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
