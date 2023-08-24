import React, { useState } from 'react';
import { TextField, Button, Box, Alert, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
  const [error, setError] = useState({
    status: false,
    message: '',
    type: '',
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const contactData = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    };

    if (contactData.name && contactData.email && contactData.message) {
      console.log(contactData);
      document.getElementById('contact-form').reset();

      setError({
        status: true,
        message: 'Message Sent Successfully',
        type: 'success',
      });
      setTimeout (()=>{
        navigate("/")},3000)
    } else {
      setError({
        status: true,
        message: 'All Fields are Required',
        type: 'error',
      });
    }
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }} id="contact-form" onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent='center' sx={{ mt: 2 }}><h1>Contact us</h1></Grid>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={4}>
          <TextField required fullWidth margin="normal" id="name" name="name" label="Name" autoFocus />
        </Grid>
        <Grid item xs={4}>
          <TextField required fullWidth margin="normal" id="email" name="email" label="Email Address" />
        </Grid>
        <Grid item xs={8}>
          <TextField
            required
            fullWidth
            margin="normal"
            id="message"
            name="message"
            label="Message"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>
            Send
          </Button>
        </Grid>
      </Grid>
      {error.status ? <Alert severity={error.type}>{error.message}</Alert> : ''}
    </Box>
  );
};

export default Contact;
