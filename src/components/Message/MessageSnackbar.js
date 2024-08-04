import React from "react";
import { Snackbar, SnackbarContent, IconButton, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MessageSnackbar = ({ open, onClose, message, severity }) => {
  const getBackgroundColor = () => {
    switch (severity) {
      case "success":
        return "#4caf50";
      case "error":
        return "#f44336";
      default:
        return "#1976d2";
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
      TransitionComponent={Fade}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <SnackbarContent
        style={{
          backgroundColor: getBackgroundColor(),
          color: "#fff",
          borderRadius: "4px",
          padding: "6px 12px",
          fontSize: "0.75rem",
          display: "flex",
          alignItems: "center",
        }}
        message={message}
      />
    </Snackbar>
  );
};

export default MessageSnackbar;
