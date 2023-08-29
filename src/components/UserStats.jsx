import PropTypes from "prop-types";

const UserStats = ({ repos, followers, following }) => {
  return (
    <section className="user-stats">
      <ul className="stats-list">
        <li className="stat-item">
          <h4 className="stat-title">Repos</h4>
          <p className="stat-value">{repos}</p>
        </li>
        <li className="stat-item">
          <h4 className="stat-title">Followers</h4>
          <p className="stat-value">{followers}</p>
        </li>
        <li className="stat-item">
          <h4 className="stat-title">Following</h4>
          <p className="stat-value">{following}</p>
        </li>
      </ul>
    </section>
  );
};

UserStats.propTypes = {
  repos: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};

export default UserStats;
