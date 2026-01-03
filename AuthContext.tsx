import React, { createContext, useContext, useState } from "react";

type User = { name: string; email: string } | null;

const AuthContext = createContext<{user: User, login: (u: User) => void, logout: () => void} | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [user, setUser] = useState<User>(null);

  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};

