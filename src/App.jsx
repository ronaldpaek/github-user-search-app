import { useState } from "react";

import { DEFAULT_USER_DATA } from "./constants";
import { AppHeader, SearchBar, User } from "./components";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(DEFAULT_USER_DATA);

  const fetchUserData = async (username) => {
    const apiUrl = `https://api.github.com/users/${username}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok && data?.login) {
        setUser(data);
        return null;
      } else {
        return "No Results";
      }
    } catch (error) {
      console.error("An error occurred while fetching the GitHub user data");
    }
  };

  return (
    <div className="container">
      <AppHeader />
      <div className="github-search-container">
        <SearchBar fetchUserData={fetchUserData} />
        <User user={user} />
      </div>
    </div>
  );
};

export default App;
