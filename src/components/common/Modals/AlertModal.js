import { View } from "react-native";
import { Modal, Button as PaperButton, Text } from "react-native-paper";
import { fontStyles, spacing } from "../style/styles";

const AlertModal = ({ text, hideAlertModal, visibleAlertModal }) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Modal
      visible={visibleAlertModal}
      onDismiss={hideAlertModal}
      contentContainerStyle={containerStyle}
      style={{ margin: spacing.secondaryPadding }}
    >
      <View style={{ marginBottom: spacing.secondaryMargin }}>
        <Text style={{ fontSize: fontStyles.primaryFontSize }}>{text}</Text>
      </View>
      <PaperButton
        mode="text"
        onPress={hideAlertModal}
        style={{ alignItems: "flex-end" }}
      >
        OK
      </PaperButton>
    </Modal>
  );
};

export default AlertModal;
