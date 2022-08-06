import { View, Text } from "react-native";
import { stylesColor, fontStyles } from "../../style/styles";

const SubTextComponent = ({ subtitleText }) => {
  return (
    <View>
      <Text
        style={{
          color: stylesColor.primarySubTextColor,
          fontSize: fontStyles.subFontSize,
        }}
      >
        {/* This will show up whenever someone discovers your Profile on {"AppName"}
        . You can change it only once. */}
        {subtitleText.trim()}
      </Text>
    </View>
  );
};

export default SubTextComponent;
