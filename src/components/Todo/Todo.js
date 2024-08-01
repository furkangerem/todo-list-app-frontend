import React from "react";
import { Box, Checkbox, IconButton, Typography, Chip, Divider } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const getPriorityColor = (priority) => {
  switch (priority) {
    case "LOW":
      return "#FFD700"; // Altın rengi
    case "MEDIUM":
      return "#FFA500"; // Turuncu
    case "HIGH":
      return "#FF4500"; // Koyu turuncu
    default:
      return "gray";
  }
};

const Todo = ({ todo }) => {
  const priorityColor = getPriorityColor(todo.todoPriority);

  return (
    <Box
      component="section"
      sx={{
        p: 2,
        border: "1px solid",
        borderColor: "#2D283E",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#564F6F",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="h6" sx={{ color: "#D1D7E0", fontWeight: "bold" }}>
          {todo.title}
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Chip
            label={todo.todoStatus}
            sx={{
              bgcolor: "rgba(0, 0, 0, 0.6)",
              color: "#D1D7E0",
              height: "24px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              borderRadius: "4px",
            }}
          />
          <Chip
            label={todo.todoPriority}
            sx={{
              bgcolor: priorityColor,
              color: "black",
              height: "24px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              borderRadius: "4px",
            }}
          />
        </Box>
      </Box>
      <Divider sx={{ borderColor: "#D1D7E0", mb: 1, opacity: 0.6 }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" sx={{ color: "#D1D7E0" }}>
          {todo.text}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox checked={todo.completed} sx={{ color: "#1976D2" }} />
          <IconButton sx={{ color: "#FFD700" }}>
            <EditIcon />
          </IconButton>
          <IconButton sx={{ color: "#FF4500" }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Todo;
