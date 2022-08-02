import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text } from "react-native";
import GoogleIcon from "../svg/GoogleIcon";

const GoogleSign = ({ screenName }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ borderRadius: 25, overflow: "hidden", marginTop:16 }}>
        <Pressable
          onPress={() => navigation.navigate(screenName)}
          android_ripple={{ color: "##b3b3b3" }}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
          }}
        >
          <View style={{ marginRight: 10 }}>
            <GoogleIcon />
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "400",
              }}
            >
              Continue With Google
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default GoogleSign;
