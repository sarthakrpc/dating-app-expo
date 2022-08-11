import { View } from "react-native";
import TitleComponent from "./splitComp/TitleComponent";
import { spacing } from "../style/styles";
import TypeSelector from "./splitComp/TypeSelector";

const InputGenderComponent = ({
  title,
  allGenders,
  genderVal,
  setGenderVal,
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
      />
    </View>
  );
};

export default InputGenderComponent;
