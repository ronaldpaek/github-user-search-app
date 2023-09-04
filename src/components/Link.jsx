import PropTypes from "prop-types";

const Link = ({ className = "", href = "", children = "" }) => (
  <a
    className={className}
    href={href}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
