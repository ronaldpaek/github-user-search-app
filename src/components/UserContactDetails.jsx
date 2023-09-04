import PropTypes from "prop-types";

import { CONTACT_DETAILS } from "../constants";
import { UserContactDetail } from "./";

const UserContactDetails = (props) => (
  <section className="user-contact-details">
    <ul
      className="contact-details-list"
      role="list"
      aria-label="Contact Details"
    >
      {CONTACT_DETAILS.map((detail) => {
        const info = props[detail.key];
        return (
          <UserContactDetail
            key={detail.key}
            {...detail}
            info={info}
            ariaLabel={`Contact Detail: ${detail.key}, ${info}`}
          />
        );
      })}
    </ul>
  </section>
);

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
