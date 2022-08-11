import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import { DateSelect } from "../../components/common/DatePicker";
import { useState } from "react";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputNameComponent from "../../components/common/SetupScreen/InputNameComponent";

const FirstName = ({ navigation }) => {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    navigation.navigate("Dob");
  };
  const disabled = () => {
    return name === "";
  };
  return (
    <ScreenLayout>
      <InputNameComponent
        title={"Your First Name"}
        placeholderText={"First Name"}
        setName={setName}
        subtitleText={
          "Your name will show up whenever someone discovers your Profile on AppName. You can change it only once."
        }
      />
      <View style={{ flexDirection: "column-reverse" }}>
        <Button
          disabled={disabled()}
          handleSubmit={handleSubmit}
          text={"Next"}
        />
      </View>
    </ScreenLayout>
  );
};

export default FirstName;
