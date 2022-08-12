import React from "react";
import { ScrollView } from "react-native";
import { Surface, Chip } from "react-native-paper";
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
              <Chip
                style={
                  checkInterestList(interest)
                    ? {
                        backgroundColor: colors.flatInputBackground,
                        margin: 4,
                        elevation: 4,
                      }
                    : { backgroundColor: colors.background, margin: 4 }
                }
                mode={"outlined"}
                onPress={() => {
                  handleList(interest);
                }}
              >
                {interest}
              </Chip>
            </React.Fragment>
          ))
        : ""}
    </ScrollView>
  );
};

export default ChipStack;
