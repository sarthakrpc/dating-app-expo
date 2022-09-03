import axios from "../api/axiosPrivate";
// import useAuth from "./useAuth";
import * as SecureStore from "expo-secure-store";

const useRefreshToken = () => {
//   const { setAuth } = useAuth();

  const refresh = async () => {
	const refreshToken = await SecureStore.getItemAsync(refreshToken)
    const response = await axios.post("/refresh", {
      refreshToken
    });
    
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
