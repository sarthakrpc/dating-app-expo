import { Appbar } from "react-native-paper";
import React from "react";
import { withTheme } from "react-native-paper";

const CustomNavigationBar = ({ navigation, back, theme }) => {
  return (
    <Appbar.Header
      statusBarHeight={0}
      style={{ backgroundColor: theme.colors.background }}
    >
      {back ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={theme.colors.text}
        />
      ) : null}
    </Appbar.Header>
  );
};

export default withTheme(CustomNavigationBar);
