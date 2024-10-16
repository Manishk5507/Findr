// AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user will hold username and email

  const login = (username, email, userId) => {
    setUser({ username, email, userId });
  };

  const signup = (username, email, userId) => {
    setUser({ username, email, userId });
  };

  const logout = () => {
    setUser(null);
  };

  const isLoggedIn = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
