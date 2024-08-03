import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  IconButton,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTodoPopup from "../Popup/EditTodoPopup";
import { DeleteWithoutAuth, PutWithoutAuth } from "../../services/HttpService";

const getPriorityColor = (priority) => {
  switch (priority) {
    case "LOW":
      return "#F0E130";
    case "MEDIUM":
      return "#F6A500";
    case "HIGH":
      return "#C8102E";
    default:
      return "#A0A0A0";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "DONE":
      return "#28A745";
    case "ONGOING":
      return "#007BFF";
    case "CANCELED":
      return "#DC3545";
    default:
      return "#6C757D";
  }
};

const Todo = ({ todo, onDelete, onUpdate }) => {
  const priorityColor = getPriorityColor(todo.todoPriority);
  const statusColor = getStatusColor(todo.todoStatus);
  const [openEditPopup, setOpenEditPopup] = useState(false);
  const [completed, setCompleted] = useState(todo.todoStatus === "DONE");

  useEffect(() => {
    setCompleted(todo.todoStatus === "DONE");
  }, [todo.todoStatus]);

  const handleDelete = async () => {
    await DeleteWithoutAuth(`http://localhost:8080/api/todos/${todo.id}`);
    onDelete(todo.id);
  };

  const handleSave = async (updatedTodo) => {
    await PutWithoutAuth(`http://localhost:8080/api/todos/${todo.id}`, {
      title: updatedTodo.title,
      text: updatedTodo.text,
      todoPriority: updatedTodo.todoPriority,
      todoStatus: updatedTodo.todoStatus,
    });
    onUpdate(updatedTodo);
    setOpenEditPopup(false);
  };

  const handleCheckboxChange = async (event) => {
    if (todo.todoStatus !== "DONE") {
      const newStatus = event.target.checked ? "DONE" : todo.todoStatus;
      setCompleted(event.target.checked);

      const updatedTodo = {
        ...todo,
        todoStatus: newStatus,
      };

      await PutWithoutAuth(
        `http://localhost:8080/api/todos/${todo.id}`,
        updatedTodo
      );
      onUpdate(updatedTodo);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        p: 2,
        border: "1px solid",
        borderColor: "#2D283E",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#564F6F",
        width: "100%",
        position: "relative",
        textDecoration: completed ? "line-through" : "none",
        color: completed ? "transparent" : "#D1D7E0",
        mb: 1,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
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
        <Typography
          variant="h6"
          sx={{
            color: completed ? "#FF4500" : "#D1D7E0",
            fontWeight: "bold",
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {todo.title}
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Chip
            label={todo.todoStatus}
            sx={{
              bgcolor: statusColor,
              color: "#D1D7E0",
              height: "24px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              borderRadius: "12px",
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
              borderRadius: "12px",
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
        <Typography
          variant="body2"
          sx={{
            color: completed ? "#FF4500" : "#D1D7E0",
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            checked={completed}
            onChange={handleCheckboxChange}
            sx={{ color: "#1976D2" }}
            disabled={todo.todoStatus === "DONE"}
          />
          <IconButton
            onClick={() => setOpenEditPopup(true)}
            sx={{ color: "#FFD700" }}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete} sx={{ color: "#FF4500" }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <EditTodoPopup
        open={openEditPopup}
        onClose={() => setOpenEditPopup(false)}
        todo={todo}
        onSave={handleSave}
      />
    </Box>
  );
};

export default Todo;
