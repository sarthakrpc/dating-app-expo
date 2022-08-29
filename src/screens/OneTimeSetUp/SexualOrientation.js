import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import { useState } from "react";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputSexualOrientationComponent from "../../components/common/SetupScreen/InputSexualOrientationComponent";
import VisibilityCheckBox from "../../components/common/SetupScreen/splitComp/VisibilityCheckBox";
import useSetupStore from "../../hooks/useSetupStore";

const SexualOrientation = ({ navigation }) => {
  //   const [type, setType] = useState("");
  //   const [checked, setChecked] = useState(false);
  const allType = [
    "Heterosexual | Straight",
    "Homosexual | Gay | Lesbian",
    "Bisexual",
  ];
  const sexualOrientation = useSetupStore(
    (state) => state.setupData.sexualOrientation
  );
  const visibileSexualOrientation = useSetupStore(
    (state) => state.setupData.visibileSexualOrientation
  );
  const addData = useSetupStore((state) => state.setData);

  const setChecked = (visibileSexualOrientation) => {
    const data = { visibileSexualOrientation: visibileSexualOrientation };
    addData(data);
  };

  const setType = (sexualOrientation) => {
    const data = { sexualOrientation: sexualOrientation };
    addData(data);
  };

  const handleSubmit = () => {
    navigation.navigate("Interests");
  };
  const disabled = () => {
    return sexualOrientation === "";
  };
  return (
    <ScreenLayout>
      <InputSexualOrientationComponent
        title={"Select your Sexual Orientation"}
        allType={allType}
        type={sexualOrientation}
        setType={setType}
      />
      <View style={{ flexDirection: "column-reverse" }}>
        <Button
          disabled={disabled()}
          handleSubmit={handleSubmit}
          text={"Next"}
        />
        <VisibilityCheckBox
          checked={visibileSexualOrientation}
          setChecked={setChecked}
          label={"Keep my Sexual Orientation private"}
        />
      </View>
    </ScreenLayout>
  );
};

export default SexualOrientation;
