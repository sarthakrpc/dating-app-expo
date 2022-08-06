import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import SignScreenNavigate from "./SignScreenNavigate";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const MainRouting = () => {
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <SignScreenNavigate />
      </NavigationContainer>
    </>
  );
};

export default MainRouting;
