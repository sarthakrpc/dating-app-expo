import axios from "../api/axiosPrivate";
import useAuth from "./useAuth";
import * as SecureStore from "expo-secure-store";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const refreshToken = await SecureStore.getItemAsync("refreshToken");
    const response = await axios.post("/user/refresh", {
      refreshToken,
    });
    setAuth((prevState) => ({
      ...prevState,
      accessToken: response.data.accessToken,
      profileData: response.data.profileData,
	  imageData: response.data.imageData
    }));

    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
