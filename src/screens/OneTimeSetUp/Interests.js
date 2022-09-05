import { useQuery } from "@tanstack/react-query";
import { View, Text } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import InputInterestComponent from "../../components/common/SetupScreen/InputInterestComponent";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import useSetupStore from "../../hooks/useSetupStore";
import getApiCalls from "../../api/getAPICalls";

const Interests = ({ navigation }) => {
  const { getAllInterests } = getApiCalls();
  const { isLoading, error, data } = useQuery(["allInterest"], getAllInterests);

  const myInterest = useSetupStore((state) => state.setupData.interests);
  const addData = useSetupStore((state) => state.setData);

  const checkInterestList = (interest) => {
    const found = myInterest.find((val) => {
      return val === interest;
    });
    return found;
  };
  const addInterest = (interest) => {
    const interests = [...myInterest, interest];
    addData({ interests });
  };
  const removeInterest = (interest) => {
    const interests = myInterest.filter((e) => e != interest);
    addData({ interests });
  };
  const handleList = (interest) => {
    const found = checkInterestList(interest);
    !found && myInterest.length < 10
      ? addInterest(interest)
      : removeInterest(interest);
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
      {isLoading ? (
        <Text> Loading... </Text>
      ) : error ? (
        <Text> Error... {error.message} </Text>
      ) : (
        <InputInterestComponent
          title={"Choose Your Interests"}
          subtitleText={"Select a minimum of 3 Interests"}
          allInterests={data}
          handleList={handleList}
          checkInterestList={checkInterestList}
          updateNos={updateNos}
        />
      )}

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
