import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import SignScreenNavigate from "./SignScreenNavigate";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: "#ed34e1",
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
