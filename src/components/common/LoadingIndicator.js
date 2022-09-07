import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
const LoadingIndicator = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size={"large"} animating={true} />
    </View>
  );
};

export default LoadingIndicator;
