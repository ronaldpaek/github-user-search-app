import { useState } from "react";

import {
  AppHeader,
  SearchBar,
  UserCard,
  UserBio,
  UserContactDetails,
  UserStats,
} from "./components";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({
    name: "The Octocat",
    login: "octocat",
    html_url: "https://github.com/octocat",
    created_at: "2011-01-25T00:00:00.000Z",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
    public_repos: 8,
    followers: 3938,
    following: 9,
    location: "San Francisco",
    blog: "https://github.blog",
    twitter_username: null,
    company: "@github",
  });

  return (
    <>
      <AppHeader />
      <div className="github-search-container">
        <SearchBar setUser={setUser} />
        <main className="user-content">
          <UserCard
            name={user.name}
            handle={user.login}
            html_url={user.html_url}
            joinDate={user.created_at}
          />
          <UserBio bio={user.bio} />
          <UserStats
            repos={user.public_repos}
            followers={user.followers}
            following={user.following}
          />
          <UserContactDetails
            location={user.location}
            website={user.blog}
            twitter={user.twitter_username}
            company={user.company}
          />
        </main>
      </div>
    </>
  );
};

export default App;
