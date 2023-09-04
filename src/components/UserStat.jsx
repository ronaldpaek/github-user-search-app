import PropTypes from "prop-types";

const UserStat = ({ title, value }) => (
  <li className="stat-item">
    <h4 className="stat-title">{title}</h4>
    <p className="stat-value">{value}</p>
  </li>
);

UserStat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default UserStat;
