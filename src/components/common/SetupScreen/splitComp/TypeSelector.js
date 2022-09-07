import { RadioButton, Text, Surface } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { spacing } from "../../style/styles";
import React from "react";
import { ScrollView } from "react-native";

const TypeSelector = ({ allType, type, setType, label }) => {
  const { colors, roundness } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        padding: spacing.primarySmallMargin,
        borderRadius: roundness,
        backgroundColor: colors.flatInputBackground,
      }}
    >
      <RadioButton.Group onValueChange={(value) => setType(value)} value={type}>
        {allType.length === label.length
          ? allType.map((e, i) => (
              <React.Fragment key={e}>
                <RadioButton.Item label={label[i]} color={colors.primary} value={e} />
              </React.Fragment>
            ))
          : ""}
      </RadioButton.Group>
    </ScrollView>
  );
};

export default TypeSelector;
