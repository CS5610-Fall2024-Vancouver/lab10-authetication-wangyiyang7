import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, {
    // Optional: Custom options for redirecting
    onRedirecting: () => <div>Loading...</div>,
    ...args,
  });

  return <Component />;
};

export default ProtectedRoute;
