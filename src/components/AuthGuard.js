import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {
  const auth = useSelector((state) => state.authReducer);

  if (!auth.user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return children;
}

export default AuthGuard;
