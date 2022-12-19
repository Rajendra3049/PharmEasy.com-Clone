import React from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [auth, setAuth] = React.useState(false);

  function Login() {
    setAuth(true);
  }
  function Logout() {
    setAuth(false);
  }

  console.log(auth);
  return (
    <AuthContext.Provider value={{ auth, setAuth, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
