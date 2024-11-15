// Profile.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h2>User Profile</h2>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    )
  );
};

export default Profile;
