import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById("login-form").reset();
      setError({ status: true, message: "Login Successfully", type: "success" });
      setTimeout (()=>{
        navigate("/dashboard")},3000)
    } else {
      setError({
        status: true,
        message: "All Fields are Required",
        type: "error",
      });
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="login-form"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email Address"
          autoFocus
        ></TextField>
        <TextField
          required
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
        ></TextField>
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Login
          </Button>
        </Box>
        <NavLink to="/resetemail">Forgot Password?</NavLink>
        {error.status ? (
          <Alert severity={error.type}>{error.message}</Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};
