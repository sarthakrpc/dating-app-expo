import { createStackNavigator } from "@react-navigation/stack";
import useAuth from "../hooks/useAuth";
import CustomNavigationBar from "./CustomNavigationBar";
import FirstName from "../screens/OneTimeSetUp/FirstName";
import Dob from "../screens/OneTimeSetUp/Dob";
import Gender from "../screens/OneTimeSetUp/Gender";
import SexualOrientation from "../screens/OneTimeSetUp/SexualOrientation";
import Interests from "../screens/OneTimeSetUp/Interests";
import ImageUpload from "../screens/OneTimeSetUp/ImageUpload";
import React from "react";

const Stack = createStackNavigator();

const SetupNavigate = () => {
  const { auth } = useAuth();
  return (
    <>
      {!auth.profileData && !auth.imageData ? (
        <Stack.Navigator
          initialRouteName="FirstName"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
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
          />
        </Stack.Navigator>
      ) : !auth.imageData && auth.profileData ? (
        <Stack.Navigator
          initialRouteName="Image"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen
            name="Images"
            component={ImageUpload}
            options={{ headerShown: true, title: "" }}
          />
        </Stack.Navigator>
      ) : (
        ""
      )}
    </>
  );
};

export { SetupNavigate };
