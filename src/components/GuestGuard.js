import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// For routes that can only be accessed by unauthenticated users
function GuestGuard({ children }) {
  const auth = useSelector((state) => state.authReducer);

  if (auth.user) {
    return <Redirect to="/" />;
  }

  return children;
}

export default GuestGuard;
