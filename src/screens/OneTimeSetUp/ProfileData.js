import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/Button";
import { DateSelect } from "../../components/common/DatePicker";
import { useState } from "react";

const ProfileData = () => {
  const [name, setName] = useState("");
  const handleSubmit = () => {};
  const disabled = () => {
    return name === "";
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 24,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          marginBottom: 36,
          flex: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <View style={{ marginBottom: 24, marginLeft: 4 }}>
            <Text style={{ fontSize: 20 }}>Your First Name</Text>
          </View>
          <View style={{ marginBottom: 12 }}>
            <TextInput
              placeholder={"First Name"}
              style={styles.inputStyles}
              onChangeText={(newText) => {
                setName(newText);
              }}
			  autoFocus={true}
            />
          </View>
          <View>
            <Text style={styles.subText}>
              This will show up whenever someone discovers your Profile on{" "}
              {"AppName"}. You can change it only once.
            </Text>
          </View>
        </View>
        {/* <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <View style={{ marginBottom: 4, marginLeft: 4 }}>
            <Text>Date of Birth</Text>
          </View>
          <View>
			<DateSelect />
		  </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <View style={{ marginBottom: 4, marginLeft: 4 }}>
            <Text>Gender</Text>
          </View>
          <View></View>
        </View> */}
      </View>
      <View style={{ flex: 1, flexDirection: "column-reverse" }}>
        <Button
          disabled={disabled()}
          handleSubmit={handleSubmit}
          text={"Next"}
        />
      </View>
    </View>
  );
};

export default ProfileData;

const styles = StyleSheet.create({
  inputStyles: {
    borderBottomWidth: 1,
    borderWidth: 0,
    paddingHorizontal: 2,
    fontSize: 16,
    borderColor: "#ed34e1",
    backgroundColor: "white",
    color: "rgba(0,0,0,0.7)",
  },
  subText: {
    color: "rgba(0,0,0,0.5)",
  },
});
