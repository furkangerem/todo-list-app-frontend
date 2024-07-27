import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#2D283E" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#D1D7E0" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#D1D7E0" }}
          >
            Todo App
          </Typography>
          <Button sx={{ color: "#D1D7E0" }}>Home</Button>
          <Button sx={{ color: "#D1D7E0" }}>Login</Button>
          <Button sx={{ color: "#D1D7E0" }}>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
