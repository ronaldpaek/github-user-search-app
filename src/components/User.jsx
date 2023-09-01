import PropTypes from "prop-types";

import { UserCard, UserBio, UserStats, UserContactDetails } from "./";

const User = ({ user }) => (
  <main className="user-content">
    <UserCard
      avatarUrl={user.avatar_url}
      name={user.name}
      handle={user.login}
      htmlUrl={user.html_url}
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
);

User.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    bio: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    blog: PropTypes.string,
    twitter_username: PropTypes.string,
    company: PropTypes.string,
  }).isRequired,
};

export default User;
