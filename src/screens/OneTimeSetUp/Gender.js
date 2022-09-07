import { View } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputGenderComponent from "../../components/common/SetupScreen/InputGenderComponent";
import useSetupStore from "../../hooks/useSetupStore";

const Gender = ({ navigation }) => {
  const allGenders = ["Male", "Female", "Other"];
  const label = ["Male", "Female", "Other"];
  const genderVal = useSetupStore((state) => state.setupData.gender);
  const addData = useSetupStore((state) => state.setData);

//   console.log(useSetupStore((state) => state.setupData));

  const handleGenderVal = (gender) => {
    const data = { gender: gender };
    addData(data);
  };

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
        setGenderVal={handleGenderVal}
		label={label}
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
