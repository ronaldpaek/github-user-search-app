import {
  AppHeader,
  SearchBar,
  UserCard,
  UserContactDetails,
  UserStats,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <main className="github-search-container">
      <AppHeader />
      <SearchBar />
      <section className="user-section">
        <UserCard name="The Octocat" handle="@octocat" joinDate="2011-01-25" />
        <p className="user-bio">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <UserStats repos={8} followers={3938} following={9} />
        <UserContactDetails
          location="San Francisco"
          website="https://github.blog"
          twitter="@github"
          company="@github"
        />
      </section>
    </main>
  );
};

export default App;
