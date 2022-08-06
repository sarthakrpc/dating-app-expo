import { View } from "react-native";
import { spacing } from "../../style/styles";

const ScreenLayout = ({ children }) => {
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          padding: spacing.secondaryPadding,
          flex: 1,
        }}
      >
        {children}
      </View>
    </>
  );
};

export default ScreenLayout;
