import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Chip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { PostWithoutAuth } from "../../services/HttpService";
import MessageSnackbar from "../Message/MessageSnackbar";

const NewTodo = ({ refreshTodos }) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("LOW");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async () => {
    const response = await saveNewTodo();
    if (response.ok) {
      setSnackbar({
        open: true,
        message: "Todo created successfully!",
        severity: "success",
      });
      setTitle("");
      setText("");
      refreshTodos();
    } else {
      setSnackbar({
        open: true,
        message: "Failed to create Todo!",
        severity: "error",
      });
    }
  };

  const saveNewTodo = async () => {
    try {
      const res = await PostWithoutAuth("http://localhost:8080/api/todos", {
        title,
        text,
        todoStatus: "ONGOING",
        todoPriority: priority,
        userId: 1,
      });
      return res;
    } catch (err) {
      console.log("error", err);
      return { ok: false };
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component="section"
      sx={{
        mt: 4,
        p: 2,
        border: "1px solid",
        borderColor: "#2D283E",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#564F6F",
        width: "100%",
        mb: 2,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#D1D7E0",
          fontWeight: "bold",
          mb: 1,
        }}
      >
        New Todo
      </Typography>
      <TextField
        label="Title"
        sx={{
          mb: 1,
          "& .MuiInputLabel-outlined": { color: "#D1D7E0" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#D1D7E0",
            },
            "&:hover fieldset": {
              borderColor: "#D1D7E0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#D1D7E0",
            },
          },
          "& .MuiInputBase-input": { color: "#D1D7E0" },
        }}
        value={title}
        onChange={(i) => setTitle(i.target.value)}
      />
      <TextField
        label="Things to do"
        sx={{
          mb: 1,
          "& .MuiInputLabel-outlined": { color: "#D1D7E0" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#D1D7E0",
            },
            "&:hover fieldset": {
              borderColor: "#D1D7E0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#D1D7E0",
            },
          },
          "& .MuiInputBase-input": { color: "#D1D7E0" },
        }}
        value={text}
        onChange={(i) => setText(i.target.value)}
      />
      <FormControl fullWidth sx={{ mb: 1 }}>
        <InputLabel id="priority-label" sx={{ color: "#D1D7E0" }}>
          Priority
        </InputLabel>
        <Select
          labelId="priority-label"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          sx={{
            color: "#D1D7E0",
            ".MuiOutlinedInput-notchedOutline": { borderColor: "#D1D7E0" },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D1D7E0",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D1D7E0",
            },
          }}
        >
          <MenuItem value="LOW">LOW</MenuItem>
          <MenuItem value="MEDIUM">MEDIUM</MenuItem>
          <MenuItem value="HIGH">HIGH</MenuItem>
        </Select>
      </FormControl>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Chip
          label="ONGOING"
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.6)",
            color: "#D1D7E0",
            height: "24px",
            fontSize: "0.75rem",
            fontWeight: "bold",
            borderRadius: "4px",
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            bgcolor: "#802BB1",
            color: "#D1D7E0",
          }}
          onClick={handleSubmit}
        >
          ADD
        </Button>
      </Box>
      <MessageSnackbar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Box>
  );
};

export default NewTodo;
