import React from "react";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = () => {
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
      <Typography variant="body1" sx={{ flexGrow: 1, color: "#D1D7E0" }}>
        To-Do Item
      </Typography>
      <Checkbox sx={{ color: "#1976D2" }} />

      <IconButton sx={{ color: "yellow" }}>
        <EditIcon />
      </IconButton>
      <IconButton sx={{ color: "red" }}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default Todo;
