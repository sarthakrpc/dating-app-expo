import { View, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { fontStyles } from "../../style/styles";

const VisibilityCheckBox = ({ checked, setChecked, label }) => {
  const { colors } = useTheme();
  return (
    <View style={{ alignItems: "center" }}>
      <Checkbox.Item
        label={label}
        onPress={() => setChecked(!checked)}
        status={checked ? "checked" : "unchecked"}
        color={colors.primary}
        labelStyle={{ fontSize: fontStyles.subFontSize }}
        position="leading"
      />
    </View>
  );
};

export default VisibilityCheckBox;
