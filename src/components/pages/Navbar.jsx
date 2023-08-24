
import React from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = {
    backgroundColor: "#6d1b7b",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            SkyTech
          </Typography>
          <Button
            component={NavLink}
            to="/"
            sx={{
              color: "white",
              textTransform: "none",
            }}
            activeStyle={activeStyle}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/contact"
            sx={{
              color: "white",
              textTransform: "none",
            }}
            activeStyle={activeStyle}
          >
            Contact
          </Button>
          <Button
            component={NavLink}
            to="/login"
            sx={{
              color: "white",
              textTransform: "none",
            }}
            activeStyle={activeStyle}
          >
            Login/Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
