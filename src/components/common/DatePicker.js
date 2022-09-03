import * as React from "react";
import { Button } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";
import { spacing } from "./style/styles";
import { View } from "react-native";
import { withTheme } from "react-native-paper";

function DatePicker({ date, setDate, theme }) {
//   function subtractYears(numOfYears, date = new Date()) {
//     const dateCopy = new Date(date.getTime());
//     dateCopy.setFullYear(dateCopy.getFullYear() - numOfYears);
//     setDate(dateCopy);
// 	// console.log(dateCopy);
//     // return dateCopy;
//   }

//   React.useEffect(() => {
//     subtractYears(16);
//   }, []);
  return (
    <>
      <View style={{ maxHeight: 75 }}>
        <DatePickerInput
          locale="en-GB"
          label="Birthdate"
          value={date}
          onChange={(d) => setDate(d)}
          inputMode="end"
          autoFocus={true}
          withModal={false}
          style={{
            backgroundColor: theme.colors.flatInputBackground,
          }}
          // mode="outlined" (see react-native-paper docs)
          // other react native TextInput props
        />
      </View>
    </>
  );
}

export default withTheme(DatePicker);
