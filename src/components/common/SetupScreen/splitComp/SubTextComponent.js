import { View, Text } from "react-native";
import { stylesColor, fontStyles } from "../../style/styles";
import { Caption } from "react-native-paper";

const SubTextComponent = ({ subtitleText }) => {
  return (
    <View>
      <Caption
        style={{
        //   color: stylesColor.primarySubTextColor,
        //   fontSize: fontStyles.subFontSize,
        }}
      >
        {/* This will show up whenever someone discovers your Profile on {"AppName"}
        . You can change it only once. */}
        {subtitleText.trim()}
      </Caption>
    </View>
  );
};

export default SubTextComponent;
