import { View, Text, Pressable, StyleSheet, Keyboard } from "react-native";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { stylesColor, fontStyles, spacing } from "./style/styles";

export const DatePicker = ({ date, setDate }) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
    Keyboard.dismiss();
  };

  return (
    <View style={{ marginBottom: spacing.primaryMargin }}>
      <Pressable onPress={showDatepicker} style={styles.inputStyles}>
        <Text style={styles.fontStyles}>{date.toDateString()}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    borderBottomWidth: 1,
    paddingHorizontal: 2,
    borderColor: stylesColor.primaryColor,
    backgroundColor: stylesColor.primaryBackgroundColor,
  },
  fontStyles: {
    color: stylesColor.primaryInputTextColor,
    fontSize: fontStyles.primaryFontSize,
  },
});
