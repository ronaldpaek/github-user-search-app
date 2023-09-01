import PropTypes from "prop-types";

const UserBio = ({ bio }) => {
  return (
    <p className={bio === null ? "user-bio no-bio" : "user-bio"}>
      {bio === null ? "This profile has no bio" : bio}
    </p>
  );
};

UserBio.propTypes = {
  bio: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

export default UserBio;
