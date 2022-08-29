import { View, StyleSheet, TextInput } from "react-native";
import { stylesColor, fontStyles, spacing } from "../../style/styles";
import { TextInput as PaperInput } from "react-native-paper";
import { withTheme } from "react-native-paper";

const TextInputComponent = ({ placeholderText, handleTextData, theme,value }) => {
  return (
    <View style={{ marginBottom: spacing.primarySmallMargin }}>
      {/* <TextInput
        placeholder={placeholderText}
        style={TextInputStyles.inputStyles}
        onChangeText={(newText) => {
          setName(newText);
        }}
        autoFocus={true}
      /> */}

      <PaperInput
        mode="flat"
        label={placeholderText}
        onChangeText={(newText) => {
			handleTextData(newText);
        }}
		value={value}
		autoFocus={true}
		style={{ backgroundColor: theme.colors.flatInputBackground }}
      />
    </View>
  );
};

export default withTheme(TextInputComponent);

// const TextInputStyles = StyleSheet.create({
//   inputStyles: {
//     borderBottomWidth: 1,
//     paddingHorizontal: 2,
//     fontSize: fontStyles.primaryFontSize,
//     borderColor: stylesColor.primaryColor,
//     backgroundColor: stylesColor.primaryBackgroundColor,
//     color: stylesColor.primaryInputTextColor,
//   },
// });
