import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../../components/SignUpLogin/Button";

const values = {
  email: "fsdf",
};

const ProfileData = () => {
  const handleSubmit = () => {};
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "white",
        padding: 16,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View style={{ marginBottom: 10, alignItems: "center" }}>
          <Text>Enter your Name</Text>
        </View>
        <View>
          <TextInput style={styles.inputStyles} />
        </View>
      </View>
      <View>
        <Button
          isValid={false}
          handleSubmit={handleSubmit}
          values={values}
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
    height: 32,
  },
});
