import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import { DatePicker } from "../../components/common/DatePicker";
import { useState } from "react";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputDateComponent from "../../components/common/SetupScreen/InputDateComponent";

const Dob = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const handleSubmit = () => {
    navigation.navigate("Dob");
  };
  const disabled = () => {
    return date === "";
  };
  return (
    <ScreenLayout>
      <InputDateComponent
        title={"Enter Your Birthday"}
        setDate={setDate}
        date={date}
        subtitleText={
          "You should be atleast 18 years old to use the platform. You age will be publicly available."
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
