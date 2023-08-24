import { TextField, Button, Box, Alert, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ResetEmail = () => {
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
    };
    if (actualData.email) {
      console.log(actualData);
      document.getElementById("passwordresetemail-form").reset();
      setError({
        status: true,
        message: "Password Reset Email is Sent. Check Your Email😊",
        type: "success",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      setError({
        status: true,
        message: "Email Field is Required",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="passwordresetemail-form"
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
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Send
              </Button>
            </Box>
            {error.status ? (
              <Alert severity={error.type}>{error.message}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
