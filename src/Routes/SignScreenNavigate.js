import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import FirstName from "../screens/OneTimeSetUp/FirstName";
import Dob from "../screens/OneTimeSetUp/Dob";

const Stack = createStackNavigator();
const SignScreenNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FirstName"
        component={FirstName}
        options={{ headerShown: true, title: "" }}
      />
      <Stack.Screen
        name="Dob"
        component={Dob}
        options={{ headerShown: true, title: "" }}
      />
    </Stack.Navigator>
  );
};

export default SignScreenNavigate;
