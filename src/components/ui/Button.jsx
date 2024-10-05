import PropTypes from "prop-types";

const Button = ({ children, onClick, href, className }) => {
  const commonClasses =
    "text-white bg-gradient-to-br from-purple-600  to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 ";

  const combinedClasses = `${commonClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  href: null,
  className: "",
};

export default Button;
