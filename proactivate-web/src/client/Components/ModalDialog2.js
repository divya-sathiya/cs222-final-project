import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form2 from "./Form2";

const ModalDialog2 = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Form2 handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog2;
