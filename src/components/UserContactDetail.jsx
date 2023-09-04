import PropTypes from "prop-types";

import { Link } from "./";

const UserContactDetail = ({
  Icon,
  className,
  href,
  text,
  info,
  ariaLabel = "",
}) => (
  <li className="contact-item" aria-label={ariaLabel}>
    <Icon info={info} />
    <Link className={className(info)} href={href(info)}>
      {text(info)}
    </Link>
  </li>
);

UserContactDetail.propTypes = {
  Icon: PropTypes.func.isRequired,
  className: PropTypes.func.isRequired,
  href: PropTypes.func.isRequired,
  text: PropTypes.func.isRequired,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  ariaLabel: PropTypes.string,
};

export default UserContactDetail;
