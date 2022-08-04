import { Text, Pressable, StyleSheet, View } from "react-native";
import React from "react";

const Button = ({ handleSubmit, disabled, text }) => {
  const getBtnStyles = () => {
    if (disabled) {
      return HomeStyles.disabledBtn;
    } else {
      return "";
    }
  };
  return (
    <View style={HomeStyles.buttonView}>
      <Pressable
        style={[HomeStyles.signUpBtn, getBtnStyles()]}
        onPress={() => {
          handleSubmit();
        }}
        disabled={disabled}
        android_ripple={{ color: "#ff94e2" }}
      >
        <Text style={HomeStyles.signUpBtnText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const HomeStyles = StyleSheet.create({
  signUpBtn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 25,
    backgroundColor: "#ed34e1",
  },
  signUpBtnText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  disabledBtn: {
    backgroundColor: "#ed34e150",
  },
  buttonView: {
    borderRadius: 25,
    overflow: "hidden",
  },
});
