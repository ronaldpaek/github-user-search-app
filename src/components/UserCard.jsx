import PropTypes from "prop-types";

import { formatUrl, formatDate } from "../utils";
import { Link } from "./";

const UserCard = ({ avatarUrl, name, handle, htmlUrl, joinDate }) => (
  <section className="user-card">
    <img className="user-avatar" src={avatarUrl} alt={`${name}'s Avatar`} />
    <div className="user-details">
      <h2 className="user-name" aria-label={`User's Name: ${name}`}>
        {name === null ? "Not Available" : name}
      </h2>
      <h3>
        <Link className="user-handle" href={formatUrl(htmlUrl)}>
          @{handle}
        </Link>
      </h3>
      <time className="joined-date" dateTime={joinDate}>
        Joined {formatDate(joinDate)}
      </time>
    </div>
  </section>
);

UserCard.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  handle: PropTypes.string,
  htmlUrl: PropTypes.string,
  joinDate: PropTypes.string,
};

export default UserCard;
