import { View, Text } from "react-native";
import { spacing, fontStyles } from "../../style/styles";
const TitleComponent = ({title}) => {
  return (
    <View style={{ marginBottom: spacing.secondaryMargin }}>
      <Text
        style={{
          fontSize: fontStyles.titleFontSize,
          fontWeight: fontStyles.titleFontWeight,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default TitleComponent;
