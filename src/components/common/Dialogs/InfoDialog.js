import { Dialog, Paragraph, Button, Portal } from "react-native-paper";

const InfoDialog = ({ text, hideInfoDialog, visibleInfoDialog }) => {
  return (
    <Portal>
      <Dialog visible={visibleInfoDialog} onDismiss={hideInfoDialog}>
        <Dialog.Content>
          <Paragraph>{text}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions style={{marginRight: 12}}>
          <Button onPress={hideInfoDialog}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default InfoDialog;
