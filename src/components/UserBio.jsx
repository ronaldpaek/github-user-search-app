import PropTypes from "prop-types";

const UserBio = ({ bio }) => {
  return (
    <p className="user-bio">{bio === null ? "This profile has no bio" : bio}</p>
  );
};

UserBio.propTypes = {
  bio: PropTypes.string.isRequired,
};

export default UserBio;
