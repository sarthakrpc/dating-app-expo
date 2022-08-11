import { Checkbox } from "react-native-paper";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Text } from "react-native-paper";
import { spacing } from "../common/style/styles";
import { useTheme } from "react-native-paper";

export default function TermsComponent({ children, ...props }) { 
	const {colors} = useTheme()
  const [checked, setChecked] = useState(false);
  return (
    <View style={HomeStyles.section}>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
          props.value = !checked;
          props.setFieldValue("terms", !checked);
        }}
        {...props}
		color={colors.primary}
      />

      <Text variant="labelSmall">{children}</Text>
      {/* <BouncyCheckbox
        size={24}
        fillColor="#ed34e1"
        unfillColor="#FFFFFF"
        text={children}
        iconStyle={{
          borderColor: "#ed34e1",
        }}
        iconInnerStyle={{ borderWidth: 2 }}
        textStyle={{
          textDecorationLine: "none",
          fontSize: 13,
        }}
        textContainerStyle={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          marginLeft: 10,
        }}
        onPress={(isChecked) => {
          props.value = isChecked;
          props.setFieldValue("terms", isChecked);
        }}
        {...props}
      /> */}
    </View>
  );
}

const HomeStyles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: spacing.primaryMargin,
    marginVertical: 0,
  },
  //   paragraph: {
  //     fontSize: 13,
  //     flex: 1,
  //     flexWrap: "wrap",
  //   },
  //   checkbox: {
  //     margin: 8,
  //     color: "#fff",
  //   },
});
