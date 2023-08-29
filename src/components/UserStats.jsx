import PropTypes from "prop-types";

const UserStats = ({ repos, followers, following }) => {
  return (
    <section className="user-stats">
      <div className="stat-item">
        <h3 className="stat-title">Repos</h3>
        <p className="stat-value">{repos}</p>
      </div>
      <div className="stat-item">
        <h3 className="stat-title">Followers</h3>
        <p className="stat-value">{followers}</p>
      </div>
      <div className="stat-item">
        <h3 className="stat-title">Following</h3>
        <p className="stat-value">{following}</p>
      </div>
    </section>
  );
};

UserStats.propTypes = {
  repos: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};

export default UserStats;
