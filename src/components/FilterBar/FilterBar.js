import React, { useState } from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Chip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import MessageSnackbar from "../Message/MessageSnackbar";

const FilterBar = ({ filter, setFilter }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (status) => {
    setAnchorEl(null);
    if (status) {
      setFilter(status);
      setSnackbarOpen(true);
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
        mb: 2,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
            color: "#D1D7E0",
            fontWeight: "bold",
          }}
        >
          Filter Todos
        </Typography>
        <IconButton onClick={handleFilterClick} sx={{ color: "#FFD700" }}>
          <FilterListIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleFilterClose(null)}
        >
          <MenuItem onClick={() => handleFilterClose("ALL")}>All</MenuItem>
          <MenuItem onClick={() => handleFilterClose("ONGOING")}>
            Ongoing
          </MenuItem>
          <MenuItem onClick={() => handleFilterClose("DONE")}>Done</MenuItem>
          <MenuItem onClick={() => handleFilterClose("CANCELED")}>
            Canceled
          </MenuItem>
        </Menu>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Chip
          label={filter}
          sx={{
            bgcolor: getStatusColor(filter),
            color: "#D1D7E0",
            height: "24px",
            fontSize: "0.75rem",
            fontWeight: "bold",
            borderRadius: "4px",
          }}
        />
      </Box>
      <MessageSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message="Filtering successful!"
        severity="success"
      />
    </Box>
  );
};

export default FilterBar;
