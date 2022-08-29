import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import { useState } from "react";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputSexualOrientationComponent from "../../components/common/SetupScreen/InputSexualOrientationComponent";
import VisibilityCheckBox from "../../components/common/SetupScreen/splitComp/VisibilityCheckBox";

const SexualOrientation = ({ navigation }) => {
  const [type, setType] = useState("");
  const [checked, setChecked] = useState(false);

  const allType = ["Heterosexual | Straight", "Homosexual | Gay | Lesbian", "Bisexual"];

  const handleSubmit = () => {
    navigation.navigate("Interests");
  };
  const disabled = () => {
    return type === "";
  };
  return (
    <ScreenLayout>
      <InputSexualOrientationComponent
        title={"Select your Sexual Orientation"}
        allType={allType}
        type={type}
        setType={setType}
      />
      <View style={{ flexDirection: "column-reverse" }}>
        <Button
          disabled={disabled()}
          handleSubmit={handleSubmit}
          text={"Next"}
        />
        <VisibilityCheckBox
          checked={checked}
          setChecked={setChecked}
          label={"Keep my Sexual Orientation private"}
        />
      </View>
    </ScreenLayout>
  );
};

export default SexualOrientation;
