import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element, path }) => {
  const { user } = useAuth();

  return user ? element : <Navigate to={path} />; // Redirect to login if not authenticated
};

export default PrivateRoute;
