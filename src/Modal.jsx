import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, onClose }) {
  const clicked = (event) => {
    if (event.target.value === "true") {
      const link = document.createElement("a");
      link.href = "/MyResume.pdf";
      link.download = "MyResume.pdf";
      link.click();
    }
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className=" rounded-xl bg-" sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Do you want to download resume?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <button
            onClick={clicked}
            value="true"
            className="mx-3 border-2 border-green-500 hover:bg-green-400 px-8 rounded-md"
          >
            Yes
          </button>
          <button
            onClick={clicked}
            value="false"
            className="mx-3 border-2 border-red-500 hover:bg-red-400 px-8 rounded-md"
          >
            No
          </button>
        </Typography>
      </Box>
    </Modal>
  );
}
