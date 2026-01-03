import { useAuth } from "./AuthContext";
import React from  "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav>
      {user ? (
        <>
          <span>Welcome {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Please Login</span>
      )}
    </nav>
  );
};
