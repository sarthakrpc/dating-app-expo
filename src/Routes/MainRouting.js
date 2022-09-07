import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import SignScreenNavigate from "./SignScreenNavigate";
import { SetupNavigate } from "./SetupNavigate";
import useAuth from "../hooks/useAuth";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const MainRouting = () => {
  const { auth } = useAuth();

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        {!auth.accessToken ? (
          <SignScreenNavigate />
        ) : (auth.accessToken && !auth.profileData) ||
          (auth.accessToken && !auth.imageData) ? (
          <SetupNavigate />
        ) : (
          ""
        )}
      </NavigationContainer>
    </>
  );
};

export default MainRouting;
