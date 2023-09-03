import PropTypes from "prop-types";

import { UserStat } from ".";
import { STATS } from "../constants";

const UserStats = (props) => {
  return (
    <section className="user-stats">
      <ul className="stats-list">
        {STATS.map((stat) => (
          <UserStat key={stat} title={stat} value={props[stat]} />
        ))}
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
