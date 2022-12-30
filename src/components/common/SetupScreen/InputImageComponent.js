import { View, StyleSheet } from "react-native";
import { Subheading, Surface } from "react-native-paper";
import { spacing } from "../style/styles";
import TitleComponent from "./splitComp/TitleComponent";

const InputImageComponent = ({ title, subtitleText }) => {
  return (
    <View
      style={{
        marginBottom: spacing.primaryMargin,
        flex: 1,
        alignItems: "center",
      }}
    >
      <TitleComponent title={title} />
      <Surface style={styles.subStyles}>
        <Subheading>{subtitleText}</Subheading>
      </Surface>
    </View>
  );
};

export default InputImageComponent;

const styles = StyleSheet.create({
  subStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.secondaryMargin,
  },
});
