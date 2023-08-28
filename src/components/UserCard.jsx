import PropTypes from "prop-types";

const UserCard = ({ name, handle, joinDate }) => {
  return (
    <div className="user-card">
      <img className="user-avatar" src="/avatar.svg" alt="User avatar" />
      <div className="user-details">
        <h2 className="user-name">{name}</h2>
        <p className="user-handle">{handle}</p>
        <time className="joined-date" dateTime={joinDate}>
          Joined {new Date(joinDate).toLocaleDateString()}
        </time>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  joinDate: PropTypes.string.isRequired,
};

export default UserCard;
