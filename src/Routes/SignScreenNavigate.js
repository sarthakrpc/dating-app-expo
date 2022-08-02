import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import ProfileData from "../screens/OneTimeSetUp/ProfileData";

const Stack = createStackNavigator();
const SignScreenNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignIn" 
	  	component={SignIn} 
	  	options={{ headerShown: false }}
	  />
	  <Stack.Screen name="ProfileData" 
	  	component={ProfileData} 
	  	options={{ headerShown: true, title: "" }}
	  />
    </Stack.Navigator>
  );
};

export default SignScreenNavigate;
