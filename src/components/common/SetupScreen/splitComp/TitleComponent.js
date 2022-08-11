import { View, Text } from "react-native";
import { spacing, fontStyles } from "../../style/styles";
import { Headline } from "react-native-paper";
const TitleComponent = ({ title }) => {
  return (
    <View style={{ marginBottom: spacing.primaryMargin }}>
      {/* <Text
        style={{
          fontSize: fontStyles.titleFontSize,
          fontWeight: fontStyles.titleFontWeight,
        }}
      > */}
      <Headline
        style={{
          fontWeight: "bold",
        }}
      >
        {title}
      </Headline>
      {/* </Text> */}
    </View>
  );
};

export default TitleComponent;
