import PropTypes from "prop-types";

import { formatUrl, formatDate } from "../utils";

const UserCard = ({ name, handle, html_url, joinDate }) => {
  return (
    <section className="user-card">
      <img className="user-avatar" src="/avatar.svg" alt="User avatar" />
      <div className="user-details">
        <h2 className="user-name">{name === null ? "Not Available" : name}</h2>
        <h3>
          <a
            className="user-handle"
            href={formatUrl(html_url)}
            target="_blank"
            rel="noreferrer noopener"
          >
            @{handle}
          </a>
        </h3>
        <time className="joined-date" dateTime={joinDate}>
          Joined {formatDate(joinDate)}
        </time>
      </div>
    </section>
  );
};

UserCard.propTypes = {
  name: PropTypes.string,
  handle: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  joinDate: PropTypes.string.isRequired,
};

export default UserCard;
