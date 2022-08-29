import { View } from "react-native";
import TitleComponent from "./splitComp/TitleComponent";
import TextInputComponent from "./splitComp/TextInputComponent";
import SubTextComponent from "./splitComp/SubTextComponent";
import { spacing } from "../style/styles";

const InputNameComponent = ({title, placeholderText, subtitleText,handleTextData, firstName}) => {
  return (
    <View
      style={{
        flexDirection: "column",
		marginBottom: spacing.primaryMargin
      }}
    >
      <TitleComponent title={title}/>
      <TextInputComponent placeholderText={placeholderText} handleTextData={handleTextData} value={firstName}/>
      <SubTextComponent subtitleText={subtitleText} />
    </View>
  );
};

export default InputNameComponent;
