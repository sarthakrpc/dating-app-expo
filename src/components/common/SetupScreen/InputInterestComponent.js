import { ScrollView, View } from "react-native";
import { spacing } from "../style/styles";
import TitleComponent from "./splitComp/TitleComponent";
import SubTextComponent from "./splitComp/SubTextComponent";

const InputInterestComponent = ({ title, subtitleText }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        marginBottom: spacing.primaryMargin,
      }}
    >
      <TitleComponent title={title} />
      <ScrollView></ScrollView>
      <View>
        <SubTextComponent subtitleText={subtitleText} />
      </View>
    </View>
  );
};

export default InputInterestComponent;
