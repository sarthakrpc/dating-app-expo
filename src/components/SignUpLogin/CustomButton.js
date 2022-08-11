// import { Text, Pressable, StyleSheet, View } from "react-native";
// import { stylesColor, fontStyles, spacing } from "../common/style/styles";
import { Button } from "react-native-paper";
import { fontStyles } from "../common/style/styles";

const CustomButton = ({ handleSubmit, disabled, text }) => {
  //   const getBtnStyles = () => {
  //     if (disabled) {
  //       return HomeStyles.disabledBtn;
  //     } else {
  //       return "";
  //     }
  //   };
  return (
    // <View style={HomeStyles.buttonView}>
    <Button
      onPress={handleSubmit}
      disabled={disabled}
      mode={"contained"}
      theme={{
        typescale: { labelLarge: { fontSize: fontStyles.primaryFontSize } },
      }}
      contentStyle={{ paddingVertical: 2 }}
      //loading={true}
      uppercase={true}
      elevation={0}
    >
      {text}
    </Button>
    //   {/* <Pressable
    //     style={[HomeStyles.signUpBtn, getBtnStyles()]}
    //     onPress={() => {
    //       handleSubmit();
    //     }}
    //     disabled={disabled}
    //     android_ripple={{ color: "#ff94e2" }}
    //   >
    //     <Text style={HomeStyles.signUpBtnText}>{text.toUpperCase()}</Text>
    //   </Pressable> */}
    // {/* </View> */}
  );
};

export default CustomButton;

// const HomeStyles = StyleSheet.create({
//   signUpBtn: {
//     alignItems: "center",
//     justifyContent: "center",
//     padding: spacing.primaryPaddimg,
//     borderRadius: spacing.borderRadius,
//     backgroundColor: stylesColor.primaryColor,
//   },
//   signUpBtnText: {
//     fontSize: fontStyles.primaryFontSize,
//     lineHeight: fontStyles.btnDefaultLineHeight,
//     fontWeight: fontStyles.btnFontWeight,
//     letterSpacing: fontStyles.letterSpacing,
//     color: stylesColor.primaryBtnFontColor,
//   },
//   disabledBtn: {
//     backgroundColor: stylesColor.primaryDisabledColor,
//   },
//   buttonView: {
//     borderRadius: spacing.primaryBorderRadius,
//     overflow: "hidden",
//   },
// });
