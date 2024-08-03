import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { PutWithoutAuth } from "../../services/HttpService";

const EditTodoPopup = ({ open, onClose, todo, onSave }) => {
  const [editedTodo, setEditedTodo] = useState(todo);

  useEffect(() => {
    setEditedTodo(todo);
  }, [todo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({ ...editedTodo, [name]: value });
  };

  const handleSave = async () => {
    await PutWithoutAuth(`http://localhost:8080/api/todos/${todo.id}`, {
      title: editedTodo.title,
      text: editedTodo.text,
      todoPriority: editedTodo.todoPriority,
      todoStatus: editedTodo.todoStatus,
    });
    onSave(editedTodo); // Update parent component
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { bgcolor: "#564F6F" } }}
    >
      <DialogTitle sx={{ color: "#D1D7E0" }}>Edit Todo</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          name="title"
          value={editedTodo.title || ""}
          onChange={handleChange}
          fullWidth
          sx={{
            input: { color: "#D1D7E0" },
            "& .MuiInputLabel-root": { color: "#D1D7E0" },
          }}
        />
        <TextField
          margin="dense"
          label="Text"
          name="text"
          value={editedTodo.text || ""}
          onChange={handleChange}
          fullWidth
          multiline
          sx={{
            input: { color: "#D1D7E0" },
            "& .MuiInputLabel-root": { color: "#D1D7E0" },
          }}
        />
        <Box mt={1}>
          <Typography sx={{ color: "#2D283E" }}>Status</Typography>
          <Select
            margin="dense"
            name="todoStatus"
            value={editedTodo.todoStatus || ""}
            onChange={handleChange}
            fullWidth
            sx={{ color: "#D1D7E0" }}
          >
            <MenuItem value="ONGOING">ONGOING</MenuItem>
            <MenuItem value="CANCELED">CANCELED</MenuItem>
            <MenuItem value="DONE">DONE</MenuItem>
          </Select>
        </Box>
        <Box mt={1}>
          <Typography sx={{ color: "#2D283E" }}>Priority</Typography>
          <Select
            margin="dense"
            name="todoPriority"
            value={editedTodo.todoPriority || ""}
            onChange={handleChange}
            fullWidth
            sx={{ color: "#D1D7E0" }}
          >
            <MenuItem value="LOW">LOW</MenuItem>
            <MenuItem value="MEDIUM">MEDIUM</MenuItem>
            <MenuItem value="HIGH">HIGH</MenuItem>
          </Select>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} sx={{ color: "#FFD700" }}>
          Save
        </Button>
        <Button onClick={onClose} sx={{ color: "#FF4500" }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTodoPopup;
