import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  // Get domain and clientId from .env file
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  if (!domain || !clientId) {
    console.error(
      "Missing Auth0 domain or clientId. Please check your .env file."
    );
    return (
      <div>
        Error: Missing Auth0 configuration. Please check your .env file.
      </div>
    );
  }

  const onRedirectCallback = (appState) => {
    // Redirect the user to the specified path or fallback to the current path
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
