import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import SignScreenNavigate from "./SignScreenNavigate";
import { SetupNavigate } from "./SetupNavigate";

import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const MainRouting = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        {!auth.accessToken ? (
          <SignScreenNavigate />
        ) : auth.accessToken && !auth.profileData ? (
          <SetupNavigate />
        ) : (
          ""
        )}
      </NavigationContainer>
    </>
  );
};

export default MainRouting;
