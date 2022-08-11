import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import { useState } from "react";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputDateComponent from "../../components/common/SetupScreen/InputDateComponent";

const Dob = ({ navigation }) => {
  const [date, setDate] = useState();
  const handleSubmit = () => {
	// alert("sdfsdf")
    navigation.navigate("Gender");
  };
  const disabled = () => {
    return date === undefined;
  };
  return (
    <ScreenLayout>
      <InputDateComponent
        title={"Enter Your Birthdate"}
        setDate={setDate}
        date={date}
        subtitleText={
          "You should be atleast 18 years old to use the platform. You age will be publicly visible."
        }
      />

      <View style={{ flex: 1, flexDirection: "column-reverse" }}>
        <Button
          disabled={disabled()}
          handleSubmit={handleSubmit}
          text={"Next"}
        />
      </View>
    </ScreenLayout>
  );
};

export default Dob;
