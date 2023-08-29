import PropTypes from "prop-types";

import { formatUrl } from "../utils";

const UserContactDetails = ({ location, website, twitter, company }) => {
  return (
    <section className="user-contact-details">
      <ul>
        <li className="contact-item">
          <img
            className="contact-icon"
            src="/icon-location.svg"
            alt="Location"
          />
          <a
            className={`contact-info ${!location && "not-available"}`}
            href={
              location === null
                ? ""
                : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location,
                  )}`
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            {location === null ? "Not Available" : location}
          </a>
        </li>
        <li className="contact-item">
          <img className="contact-icon" src="/icon-website.svg" alt="Website" />
          <a
            className={`contact-info ${!website && "not-available"}`}
            href={website === "" ? "" : formatUrl(website)}
            target="_blank"
            rel="noreferrer noopener"
          >
            {website === "" ? "Not Available" : website}
          </a>
        </li>
        <li className="contact-item">
          <img className="contact-icon" src="/icon-twitter.svg" alt="Twitter" />
          <a
            className={`contact-info ${!twitter && "not-available"}`}
            href={twitter === null ? "" : `https://twitter.com/${twitter}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {twitter === null ? "Not Available" : `@${twitter}`}
          </a>
        </li>
        <li className="contact-item">
          <img className="contact-icon" src="/icon-company.svg" alt="Company" />
          <a
            className={`contact-info ${!company && "not-available"}`}
            href={
              company === null ? "" : `https://github.com/${company.slice(1)}`
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            {company === null ? "Not Available" : company}
          </a>
        </li>
      </ul>
    </section>
  );
};

UserContactDetails.propTypes = {
  location: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default UserContactDetails;
