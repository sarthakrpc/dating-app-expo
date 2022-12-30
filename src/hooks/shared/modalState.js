import { useState } from "react";

const modalState = () => {
  const [visibleInfoDialog, setVisibleInfoDialog] = useState(false);
  const [modalText, setModalText] = useState("");
  const showInfoDialog = () => setVisibleInfoDialog(true);
  const hideInfoDialog = () => setVisibleInfoDialog(false);
  const handleModalText = (text) => setModalText(text);

  return {visibleInfoDialog,modalText,showInfoDialog,hideInfoDialog,handleModalText};
};

export default modalState;
