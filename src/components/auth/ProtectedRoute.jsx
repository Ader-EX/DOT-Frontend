import { Navigate } from "react-router-dom";

import PropTypes from "prop-types";
import { useAuth } from "./AuthCtx";
const ProtectedRoute = ({ children }) => {
  ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
