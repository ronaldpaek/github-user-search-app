import PropTypes from "prop-types";

const UserStat = ({ title, value, ariaLabel = "" }) => (
  <li className="stat-item" aria-label={ariaLabel}>
    <h4 className="stat-title">{title}</h4>
    <p className="stat-value">{value}</p>
  </li>
);

UserStat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  ariaLabel: PropTypes.string,
};

export default UserStat;
