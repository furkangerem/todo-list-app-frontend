import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Popover,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const NewTodo = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [priority, setPriority] = useState("LOW");
  const [status, setStatus] = useState("ONGOING");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        position: "relative",
      }}
    >
      <TextField
        label="Things to do"
        sx={{
          mr: 2,
          flexGrow: 1,
          "& .MuiInputLabel-outlined": {
            color: "#D1D7E0",
          },
        }}
      />
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        sx={{ color: "#D1D7E0" }}
      >
        <MoreVertIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2, minWidth: 200, bgcolor: "#802BB1" }}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="priority-label" sx={{ color: "#D1D7E0" }}>
              Priority
            </InputLabel>
            <Select
              labelId="priority-label"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              sx={{ color: "#D1D7E0" }}
            >
              <MenuItem value="LOW">Low</MenuItem>
              <MenuItem value="MEDIUM">Medium</MenuItem>
              <MenuItem value="HIGH">High</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="status-label" sx={{ color: "#D1D7E0" }}>
              Status
            </InputLabel>
            <Select
              labelId="status-label"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{ color: "#D1D7E0" }}
            >
              <MenuItem value="ONGOING">Ongoing</MenuItem>
              <MenuItem value="DONE">Done</MenuItem>
              <MenuItem value="CANCELED">Canceled</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Popover>
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
