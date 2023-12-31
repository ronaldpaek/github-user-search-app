import PropTypes from "prop-types";

import { UserStat } from ".";
import { STATS } from "../constants";

const UserStats = (props) => (
  <section className="user-stats">
    <ul className="stats-list" role="list" aria-label="User Statistics">
      {STATS.map((stat) => {
        const value = props[stat];
        return (
          <UserStat
            key={stat}
            title={stat}
            value={value}
            ariaLabel={`${stat} Stat: ${value}`}
          />
        );
      })}
    </ul>
  </section>
);

UserStats.propTypes = {
  repos: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};

export default UserStats;
