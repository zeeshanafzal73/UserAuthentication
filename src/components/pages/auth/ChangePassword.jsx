import { Alert,Box, Button, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const ChangePassword = () => {

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
            document.getElementById("password-change-form").reset();
            setError({
                status: true,
                message: "Password Changed Successfully😊",
                type: "success",
              });
              setTimeout (()=>{
                navigate("/login")},3000)
          }    
}
      else {
      setError({
        status: true,
        message: "New Password and Confirm New Password Fields are Required",
        type: "error",
      });
    }

}
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxWidth: 400,
        mx: 15,
        mt:6,
        textAlign:"center"
      }}
    >
      <h1>Change Password</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
        id="password-change-form"
      >
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="New Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="re_password"
          label="Confirm New Password"
          type="password"
          id="re_password"
          autoComplete="current-password"
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Update
          </Button>
        </Box>
        {error.status ? (
              <Alert severity={error.type}>{error.message}</Alert>
            ) : (
              ""
            )}
      </Box>
    </Box>
  );
};
