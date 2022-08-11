import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import { useState } from "react";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputGenderComponent from "../../components/common/SetupScreen/InputGenderComponent";
import VisibilityCheckBox from "../../components/common/SetupScreen/splitComp/VisibilityCheckBox";

const Gender = ({ navigation }) => {
  const [genderVal, setGenderVal] = useState("");
  //   const [checked, setChecked] = useState(false);

  const allGenders = ["Male", "Female", "Other"];

  const handleSubmit = () => {
    navigation.navigate("SexualOrientation");
  };
  const disabled = () => {
    return genderVal === "";
  };
  return (
    <ScreenLayout>
      <InputGenderComponent
        title={"Select your Gender"}
        allGenders={allGenders}
        genderVal={genderVal}
        setGenderVal={setGenderVal}
      />
      <View style={{ flexDirection: "column-reverse" }}>
        <Button
          disabled={disabled()}
          handleSubmit={handleSubmit}
          text={"Next"}
        />
        {/* <VisibilityCheckBox
          checked={checked}
          setChecked={setChecked}
          label={"Keep my gender private"}
        /> */}
      </View>
    </ScreenLayout>
  );
};

export default Gender;
