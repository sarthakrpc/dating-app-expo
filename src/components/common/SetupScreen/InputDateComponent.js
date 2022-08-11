import { View } from "react-native";
import TitleComponent from "./splitComp/TitleComponent";
import DatePicker from "../DatePicker";
import SubTextComponent from "./splitComp/SubTextComponent";
import { spacing } from "../style/styles";

const InputDateComponent = ({ title, subtitleText, date, setDate }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        marginBottom: spacing.primaryMargin,
      }}
    >
      <TitleComponent title={title} />
      <DatePicker date={date} setDate={setDate} />
      <SubTextComponent subtitleText={subtitleText} />
    </View>
  );
};

export default InputDateComponent;
