import { View } from "react-native";
import Button from "../../components/SignUpLogin/CustomButton";
import ScreenLayout from "../../components/common/SetupScreen/splitComp/ScreenLayout";
import InputImageComponent from "../../components/common/SetupScreen/InputImageComponent";
const ImageUpload = () => {
  const handleSubmit = () => {};
  return (
    <ScreenLayout>
      <InputImageComponent 
		title={"Add Photos"}
		subtitleText={"Upload atleast one photo"}
	  />
      <View style={{ flexDirection: "column-reverse" }}>
        <Button disabled={true} handleSubmit={handleSubmit} text={"Next"} />
      </View>
    </ScreenLayout>
  );
};

export default ImageUpload;
