import { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    accessToken: "",
    refreshToken: "",
    profileData: false,
	imageData: false
  });

  const saveRefreshTokens = async () => {
    await SecureStore.setItemAsync("refreshToken", auth.refreshToken);
  };

  useEffect(() => {
    saveRefreshTokens();
  }, [auth.refreshToken]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
