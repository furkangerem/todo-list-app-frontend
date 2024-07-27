import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const NewTodo = () => {
  return (
    <Box
      component="section"
      sx={{
        p: 2,
        border: "1px solid",
        borderColor: "#2D283E",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        bgcolor: "#564F6F",
        width: "100%",
      }}
    >
      <TextField
        label="Things to do "
        sx={{
          mr: 2,
          flexGrow: 1,
          // Class for the label of the input field
          "& .MuiInputLabel-outlined": {
            color: "#D1D7E0",
            fontStyle: "default",
          },
        }}
      />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        sx={{ bgcolor: "#802BB1", color: "#D1D7E0" }}
      >
        ADD
      </Button>
    </Box>
  );
};

export default NewTodo;
