import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import InputInterestComponent from "../../components/common/SetupScreen/InputInterestComponent";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
// import VisibilityCheckBox from "../../components/common/SetupScreen/splitComp/VisibilityCheckBox";

const Interests = ({ navigation }) => {
 const allInterests = [];
  const [myInterest, setMyInterest] = useState([]);
  const checkInterestList = (interest) => {
    const found = myInterest.find((val) => {
      return val === interest;
    });
    return found;
  };
  const handleList = (interest) => {
    const found = checkInterestList(interest);

    !found && myInterest.length < 10
      ? setMyInterest((myInterest) => [...myInterest, interest])
      : setMyInterest(
          myInterest.filter((selectedInterest) => selectedInterest !== interest)
        );
  };
  const updateNos = () => {
    return myInterest.length;
  };
  const handleSubmit = () => {
    // navigation.navigate("SignIn");
  };
  const disabled = () => {
    return myInterest.length < 3;
  };
  return (
    <ScreenLayout>
        <InputInterestComponent
          title={"Choose Your Interests"}
          subtitleText={"Select a minimum of 3 Interests"}
          allInterests={allInterests}
          handleList={handleList}
          checkInterestList={checkInterestList}
          updateNos={updateNos}
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
          label={"Keep my Sexual Orientation private"}
        /> */}
      </View>
    </ScreenLayout>
  );
};

export default Interests;
