import { View, StyleSheet, TextInput } from "react-native";
import { stylesColor, fontStyles, spacing } from "../../style/styles";

const TextInputComponent = ({ placeholderText, setName }) => {
  return (
    <View style={{ marginBottom: spacing.primaryMargin }}>
      <TextInput
        placeholder={placeholderText}
        style={TextInputStyles.inputStyles}
        onChangeText={(newText) => {
          setName(newText);
        }}
        autoFocus={true}
      />
    </View>
  );
};

export default TextInputComponent;

const TextInputStyles = StyleSheet.create({
  inputStyles: {
    borderBottomWidth: 1,
    paddingHorizontal: 2,
    fontSize: fontStyles.primaryFontSize,
    borderColor: stylesColor.primaryColor,
    backgroundColor: stylesColor.primaryBackgroundColor,
    color: stylesColor.primaryInputTextColor,
  },
});
