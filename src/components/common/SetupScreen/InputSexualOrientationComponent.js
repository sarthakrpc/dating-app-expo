import { View } from "react-native";
import TitleComponent from "./splitComp/TitleComponent";
import { spacing } from "../style/styles";
import TypeSelector from "./splitComp/TypeSelector";

const InputSexualOrientationComponent = ({
  title,
  allType,
  type,
  setType,
  label,
}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        marginBottom: spacing.secondaryMargin,
        flex: 1,
      }}
    >
      <TitleComponent title={title} />
      <TypeSelector
        allType={allType}
        type={type}
        setType={setType}
        label={label}
      />
    </View>
  );
};

export default InputSexualOrientationComponent;
