import { View } from "react-native";
import TitleComponent from "./splitComp/TitleComponent";
import { spacing } from "../style/styles";
import TypeSelector from "./splitComp/TypeSelector";

const InputGenderComponent = ({
  title,
  allGenders,
  genderVal,
  setGenderVal,
  label
}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        marginBottom: spacing.secondaryMargin,
		flex: 1
      }}
    >
      <TitleComponent title={title} />
      <TypeSelector
        allType={allGenders}
        type={genderVal}
        setType={setGenderVal}
		label={label}
      />
    </View>
  );
};

export default InputGenderComponent;
