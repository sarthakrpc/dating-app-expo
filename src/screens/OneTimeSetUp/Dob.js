import { Keyboard, View } from "react-native";
import { useState } from "react";
import dayjs from "dayjs";
import Button from "../../components/SignUpLogin/CustomButton";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputDateComponent from "../../components/common/SetupScreen/InputDateComponent";
import useSetupStore from "../../hooks/useSetupStore";
import InfoDialog from "../../components/common/Dialogs/InfoDialog";

const Dob = ({ navigation }) => {
  const [visibleInfoDialog, setVisibleInfoDialog] = useState(false);
  const showInfoDialog = () => setVisibleInfoDialog(true);
  const hideInfoDialog = () => setVisibleInfoDialog(false);

  const birthDate = useSetupStore((state) => state.setupData.birthDate);
  const addData = useSetupStore((state) => state.setData);

  const handleDate = (date) => {
	console.log(date);
    const data = { birthDate: date };
    addData(data);
    navigation.setOptions({ headerStyle: { backgroundColor: "#000" } });
  };

  const handleSubmit = () => {
    const currDate = dayjs(new Date());
    const age = currDate.diff(dayjs(birthDate), "year");
    if (age < 18 || age > 200) {
		showInfoDialog();
		Keyboard.dismiss();
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
      <InfoDialog
        text={"You must be atleast 18 years old to use the app"}
        hideInfoDialog={hideInfoDialog}
        visibleInfoDialog={visibleInfoDialog}
      />
    </>
  );
};

export default Dob;
