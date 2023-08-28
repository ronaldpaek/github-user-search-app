import PropTypes from "prop-types";

const UserContactDetails = ({ location, website, twitter, company }) => {
  return (
    <div className="user-contact-details">
      <div className="contact-item">
        <img className="contact-icon" src="/icon-location.svg" alt="Location" />
        <p className="contact-info">{location}</p>
      </div>
      <div className="contact-item">
        <img className="contact-icon" src="/icon-website.svg" alt="Website" />
        <a className="contact-info" href="#">
          {website}
        </a>
      </div>
      <div className="contact-item">
        <img className="contact-icon" src="/icon-twitter.svg" alt="Twitter" />
        <p className="contact-info">{twitter}</p>
      </div>
      <div className="contact-item">
        <img className="contact-icon" src="/icon-company.svg" alt="Company" />
        <p className="contact-info">{company}</p>
      </div>
    </div>
  );
};

UserContactDetails.propTypes = {
  location: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default UserContactDetails;
