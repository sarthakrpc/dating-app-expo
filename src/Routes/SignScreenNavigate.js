import { createStackNavigator } from "@react-navigation/stack";
import CustomNavigationBar from "./CustomNavigationBar";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
// import FirstName from "../screens/OneTimeSetUp/FirstName";
// import Dob from "../screens/OneTimeSetUp/Dob";
// import Gender from "../screens/OneTimeSetUp/Gender";
// import SexualOrientation from "../screens/OneTimeSetUp/SexualOrientation";
// import Interests from "../screens/OneTimeSetUp/Interests";
// import { FirstTimePage } from "../screens/OneTimeSetUp/FirstTimePage";

const Stack = createStackNavigator();
const SignScreenNavigate = () => {
  return (
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
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
        {/* <Stack.Screen
          name="FirstTimePage"
          component={FirstTimePage}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
        name="FirstName"
        component={FirstName}
        options={{ headerShown: true, title: "" }}
      />
      <Stack.Screen
        name="Dob"
        component={Dob}
        options={{ headerShown: true, title: "" }}
      />
      <Stack.Screen
        name="Gender"
        component={Gender}
        options={{ headerShown: true, title: "" }}
      />
      <Stack.Screen
        name="SexualOrientation"
        component={SexualOrientation}
        options={{ headerShown: true, title: "" }}
      />
      <Stack.Screen
        name="Interests"
        component={Interests}
        options={{ headerShown: true, title: "" }}
      /> */}
      </Stack.Navigator>
  );
};

export default SignScreenNavigate;
