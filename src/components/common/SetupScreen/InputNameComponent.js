import { View } from "react-native";
import TitleComponent from "./splitComp/TitleComponent";
import TextInputComponent from "./splitComp/TextInputComponent";
import SubTextComponent from "./splitComp/SubTextComponent";
import { spacing } from "../style/styles";

const InputNameComponent = ({title, placeholderText, subtitleText,setName}) => {
  return (
    <View
      style={{
        flexDirection: "column",
		marginBottom: spacing.primaryMargin
      }}
    >
      <TitleComponent title={title}/>
      <TextInputComponent placeholderText={placeholderText} setName={setName}/>
      <SubTextComponent subtitleText={subtitleText} />
    </View>
  );
};

export default InputNameComponent;
