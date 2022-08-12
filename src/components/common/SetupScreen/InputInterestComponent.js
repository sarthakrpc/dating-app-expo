import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Surface } from "react-native-paper";
import { spacing } from "../style/styles";
import TitleComponent from "./splitComp/TitleComponent";
import { Subheading, Chip } from "react-native-paper";
import ChipStack from "./splitComp/ChipStack";

const InputInterestComponent = ({
  title,
  subtitleText,
  allInterests,
  handleList,
  checkInterestList,
  updateNos
}) => {
  return (
    <View
      style={{
        marginBottom: spacing.primaryMargin,
		flex: 1,
      }}
    >
      <TitleComponent title={title} />
      <Surface style={styles.subStyles}>
        <Subheading> {subtitleText} </Subheading>
        <Chip mode="outlined">{updateNos()} / 10</Chip>
      </Surface>
      <ChipStack
        allInterests={allInterests}
        handleList={handleList}
        checkInterestList={checkInterestList}
      />
    </View>
  );
};

export default InputInterestComponent;

const styles = StyleSheet.create({
  subStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.secondaryMargin,
  },
});
