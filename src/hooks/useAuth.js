import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuth hook must be used with a AuthProvider component"
    );
  }
  return context;
};

export default useAuth;
