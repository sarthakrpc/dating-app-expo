import { useQuery } from "@tanstack/react-query";
import { View, Text } from "react-native";
import LoadingIndicator from "../../components/common/LoadingIndicator";
import Button from "../../components/SignUpLogin/CustomButton";
import InputInterestComponent from "../../components/common/SetupScreen/InputInterestComponent";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import useSetupStore from "../../hooks/useSetupStore";
import getApiCalls from "../../api/getAPICalls";
import postAPICalls from "../../api/postAPICalls";
import { useCallback } from "react";
import useAuth from "../../hooks/useAuth";

const Interests = ({ navigation }) => {
  const { getAllInterests } = getApiCalls();
  const { postProfileData } = postAPICalls();
  const { setAuth } = useAuth();

  const { isLoading, error, data } = useQuery(["allInterest"], getAllInterests);

  const allData = useSetupStore((state) => state.setupData);
  const myInterest = useSetupStore((state) => state.setupData.interests);
  const addData = useSetupStore((state) => state.setData);

  const checkInterestList = useCallback(
    (interest) => {
      const found = myInterest.find((val) => {
        return val === interest;
      });
      return found;
    },
    [myInterest]
  );
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
  const handleSubmit = async () => {
    const saved = await postProfileData(allData);
    if (saved.profileData) {
      setAuth((prev) => ({ ...prev, profileData: saved.profileData }));
    }
    console.log(saved);
  };
  const disabled = () => {
    return myInterest.length < 3;
  };
  return (
    <ScreenLayout>
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <Text> Error... {error.message} </Text>
      ) : (
        <>
          <InputInterestComponent
            title={"Choose Your Interests"}
            subtitleText={"Select a minimum of 3 Interests"}
            allInterests={data}
            handleList={handleList}
            checkInterestList={checkInterestList}
            updateNos={updateNos}
            myInterest={myInterest}
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
        </>
      )}
    </ScreenLayout>
  );
};

export default Interests;
