import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
// import { useState } from "react";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputNameComponent from "../../components/common/SetupScreen/InputNameComponent";
// import setupHook from "../../hooks/useSetupStore";
import useSetupStore from "../../hooks/useSetupStore";

const FirstName = ({ navigation }) => {
  //   const { handleData, returnData } = setupHook();
  //   const { firstName } = returnData();

  const firstName = useSetupStore((state) => state.setupData.firstName);
  const addData = useSetupStore((state) => state.setData);
//   console.log(useSetupStore((state) => state.setupData));

  const handleTextData = (newText) => {
    const data = { firstName: newText.trimStart() };
    addData(data);
    //   const addData = useSetupStore((state) => state.setData(data));
    //   addData();
    // handleData(data);
  };

  const handleSubmit = () => {
    navigation.navigate("Dob");
  };

  const disabled = () => {
    return firstName === "";
  };

  return (
    <ScreenLayout>
      <InputNameComponent
        title={"Your First Name"}
        placeholderText={"First Name"}
        firstName={firstName}
        handleTextData={handleTextData}
        subtitleText={
          "Your name will show up whenever someone discovers your Profile on AppName. You cannot change it."
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
