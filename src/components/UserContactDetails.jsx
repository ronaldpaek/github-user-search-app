import PropTypes from "prop-types";

import { formatUrl } from "../utils";
import { Location, Website, Twitter, Company } from "./icons";

const UserContactDetails = ({ location, website, twitter, company }) => {
  const inActiveColor = "#a5b4cd";

  return (
    <section className="user-contact-details">
      <ul className="contact-details-list">
        <li className="contact-item">
          <Location location={location} inActiveColor={inActiveColor} />
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
          <Website website={website} inActiveColor={inActiveColor} />
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
          <Twitter twitter={twitter} inActiveColor={inActiveColor} />
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
          <Company company={company} inActiveColor={inActiveColor} />
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

const stringOrNull = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.oneOf([null]),
]);

UserContactDetails.propTypes = {
  location: stringOrNull,
  website: stringOrNull,
  twitter: stringOrNull,
  company: stringOrNull,
};

export default UserContactDetails;
