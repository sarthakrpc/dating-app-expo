import { View } from "react-native";
import { useState } from "react";
import dayjs from "dayjs";
import Button from "../../components/SignUpLogin/CustomButton";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputDateComponent from "../../components/common/SetupScreen/InputDateComponent";
import useSetupStore from "../../hooks/useSetupStore";
import AlertModal from "../../components/common/Modals/AlertModal";

const Dob = ({ navigation }) => {
  const [visibleAlertModal, setVisibleAlertModal] = useState(false);
  const showAlertModal = () => setVisibleAlertModal(true);
  const hideAlertModal = () => setVisibleAlertModal(false);

  const birthDate = useSetupStore((state) => state.setupData.birthDate);
  const addData = useSetupStore((state) => state.setData);

  const handleDate = (date) => {
    const data = { birthDate: date };
    addData(data);
  };

  const handleSubmit = () => {
    const currDate = dayjs(new Date());
    const age = currDate.diff(dayjs(birthDate), "year");
    if (age < 18 || age > 200) {
      showAlertModal();
    } else {
      navigation.navigate("Gender");
    }
  };

  const disabled = () => {
    return birthDate === undefined;
  };
  return (
    <>
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
      <AlertModal
        text={"You must be atleast 18 years old to use the app"}
        hideAlertModal={hideAlertModal}
        visibleAlertModal={visibleAlertModal}
      />
    </>
  );
};

export default Dob;
