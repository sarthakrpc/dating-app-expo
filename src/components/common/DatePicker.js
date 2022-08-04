import { View, Text, Pressable, StyleSheet, Keyboard } from "react-native";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export const DateSelect = () => {
  const [date, setDate] = useState(new Date());

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
    <View>
      <Pressable onPress={showDatepicker} style={styles.inputStyles}>
        <Text style={styles.fontStyles}>{date.toDateString()}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    borderWidth: 1,
    padding: 12,
    paddingLeft: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#0005",
    backgroundColor: "white",
  },
  fontStyles: {
    fontSize: 16,
  },
});
