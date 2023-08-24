import { TextField, Button, Box, Alert, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserRegiteration = () => {
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
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      re_password: data.get("re_password"),
    //   tc:data.get('tc')
    };
    if (
      actualData.email &&
      actualData.password &&
      actualData.name &&
      actualData.re_password 
    //   actualData.tc !== null
 ) {
      if (actualData.password !== actualData.re_password) {
        console.log("Password doesn't match");
        setError({
          status: true,
          message: "Please enter valid Password",
          type: "error",
        });
      } else {
        console.log(actualData);
        document.getElementById("registeration-form").reset();
       
        setError({
          status: true,
          message: "Registered Successfully",
          type: "success",
        });
        setTimeout (()=>{
            navigate("/dashboard")},3000)
      }
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
        id="registeration-form"
        name ="registeration-form"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          fullWidth
          margin="normal"
          id="name"
          name="name"
          label="Name"
          autoFocus
        ></TextField>
        <TextField
          required
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email Address"
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
        <TextField
          required
          fullWidth
          margin="normal"
          id="re_password"
          name="re_password"
          label="Confirm Password"
          type="password"
        ></TextField>
        {/* <FormControlLabel
          control={<CheckBox value= "agree" color="primary" name="tc" id="tc" />}
          label="I agree to terms and conditions."
        /> */}
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Register
          </Button>
        </Box>
        {error.status ? (
          <Alert severity={error.type}>{error.message}</Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};
