import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import InputInterestComponent from "../../components/common/SetupScreen/InputInterestComponent";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
// import VisibilityCheckBox from "../../components/common/SetupScreen/splitComp/VisibilityCheckBox";

const Interests = ({ navigation }) => {
  const allInterests = [];
  const handleSubmit = () => {
    // navigation.navigate("SignIn");
  };
  const disabled = () => {
    return false;
  };
  return (
    <ScreenLayout>
      <View>
        <InputInterestComponent
          title={"Choose Your Interests"}
          subtitleText={"Select a minimum of 5 Interests"}
          allInterests={allInterests}
        />
      </View>
      <View style={{ flexDirection: "column-reverse" }}>
        <Button
          disabled={disabled()}
          handleSubmit={handleSubmit}
          text={"Next"}
        />
        {/* <VisibilityCheckBox
          checked={checked}
          setChecked={setChecked}
          label={"Keep my Sexual Orientation private"}
        /> */}
      </View>
    </ScreenLayout>
  );
};

export default Interests;
