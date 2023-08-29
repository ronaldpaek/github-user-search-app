import PropTypes from "prop-types";

import { formatUrl } from "../utils";

const UserCard = ({ name, handle, html_url, joinDate }) => {
  return (
    <section className="user-card">
      <img className="user-avatar" src="/avatar.svg" alt="User avatar" />
      <div className="user-details">
        <h2 className="user-name">{name === null ? "Not Available" : name}</h2>
        <a
          className="user-handle"
          href={formatUrl(html_url)}
          target="_blank"
          rel="noreferrer noopener"
        >
          @{handle}
        </a>
        <time className="joined-date" dateTime={joinDate}>
          Joined {new Date(joinDate).toLocaleDateString()}
        </time>
      </div>
    </section>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  joinDate: PropTypes.string.isRequired,
};

export default UserCard;
