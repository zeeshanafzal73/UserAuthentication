import { TextField, Button, Box, Alert, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const ResetPassword = () => {
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
        password: data.get("password"),
        re_password: data.get("re_password"),
    };
    if (actualData.password && actualData.re_password) {
        if (actualData.password !== actualData.re_password) {
            setError({
              status: true,
              message: "Please enter valid Password",
              type: "error",
            });
          } else {
            document.getElementById("passwordreset-form").reset();
            setError({
                status: true,
                message: "Password Reset Successfully😊",
                type: "success",
              });
              setTimeout (()=>{
                navigate("/login")},3000)
          }    
}
      else {
      setError({
        status: true,
        message: "Password and Confirm Password Fields are Required",
        type: "error",
      });
    }

}
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
        <h1>Reset Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="passwordreset-form"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              fullWidth
              margin="normal"
              id="password"
              name="password"
              label="Password"
              type="password"
            ></TextField>
            <TextField
              required
              fullWidth
              margin="normal"
              id="re_password"
              name="re_password"
              label="Confirm Password"
              type="password"
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
