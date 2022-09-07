import React from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { Chip } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { spacing } from "../../style/styles";

const ChipStack = ({ allInterests, handleList, checkInterestList }) => {
  const { colors, roundness } = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: spacing.primaryTinyPadding,
        // paddingVertical: spacing.primaryPadding,
        // borderRadius: roundness,
        // backgroundColor: colors.flatInputBackground
      }}
    >
      {allInterests
        ? allInterests.map((interest) => (
            <React.Fragment key={interest}>
              <Pressable
                style={[
                  styles.chip,
                  checkInterestList(interest)
                    ? {
                        backgroundColor: colors.flatInputBackground,
                        borderColor: colors.primary,
                      }
                    : {},
                ]}
                mode={"outlined"}
                onPress={() => {
                  handleList(interest);
                }}
              >
                <Text style={{letterSpacing: 1}}>{interest}</Text>
              </Pressable>
            </React.Fragment>
          ))
        : ""}
    </ScrollView>
  );
};

export default ChipStack;

const styles = StyleSheet.create({
  chip: {
    margin: spacing.primaryTinyMargin,
    padding: spacing.primarySmallPadding,
	paddingHorizontal: spacing.primaryMargin,
    borderRadius: 20,
    borderWidth: 0.1,
  },
});
