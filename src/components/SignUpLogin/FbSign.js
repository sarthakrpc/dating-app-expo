import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";

const FbSign = ({ screenName }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ borderRadius: 25, overflow: "hidden", marginTop: 16 }}>
        <Pressable
          onPress={() => navigation.navigate(screenName)}
          android_ripple={{ color: "##b3b3b3" }}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            borderColor: "#1877F2",
            borderWidth: 1,
            padding: 10,
            backgroundColor: "#1877F2",
          }}
        >
          <View style={{ marginRight: 10 }}>
            <FontAwesome5 name="facebook" size={24} color="white" />
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "400",
                color: "white",
              }}
            >
              Continue With Facebook
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default FbSign;
