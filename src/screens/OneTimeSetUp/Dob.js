import { View, Text, TextInput, StyleSheet } from "react-native";
import dayjs from "dayjs";
import Button from "../../components/SignUpLogin/CustomButton";
// import { useState } from "react";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputDateComponent from "../../components/common/SetupScreen/InputDateComponent";
import setupHook from "../../hooks/setupHook";

const Dob = ({ navigation }) => {
  const { handleData, returnData } = setupHook();
  const { birthDate } = returnData();
  console.log(returnData());

  const handleDate = (date) => {
    const data = { birthDate: date };
    handleData(data);
  };

  const handleSubmit = () => {
    const currDate = dayjs(new Date());
    console.log(currDate.diff(dayjs(birthDate), "year"));
    navigation.navigate("Gender");
  };
  
  const disabled = () => {
    console.log(returnData());
    return birthDate === undefined;
  };
  return (
    <ScreenLayout>
      <InputDateComponent
        title={"Enter Your Birthdate"}
        setDate={handleDate}
        date={birthDate}
        subtitleText={
          "You should be atleast 18 years old to use the platform. Your age will be publicly visible."
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
