import Checkbox from "expo-checkbox";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { StyleSheet, Text, View } from "react-native";

export default function TermsComponent({ children, ...props }) {
  return (
    <View style={HomeStyles.section}>
      <BouncyCheckbox
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
      />
    </View>
  );
}

const HomeStyles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
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
