const AppHeader = () => {
  return (
    <header className="app-header">
      <h1 className="app-title">devfinder</h1>
      <div className="theme-toggle">
        <p className="theme-label">Light</p>
        <img className="theme-icon" src="/icon-sun.svg" alt="Sun icon" />
      </div>
    </header>
  );
};

export default AppHeader;
