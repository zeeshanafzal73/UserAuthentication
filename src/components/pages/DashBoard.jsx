import { CssBaseline, Grid, Typography,Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { orange } from '@mui/material/colors';
import { ChangePassword } from './auth/ChangePassword';

export const DashBoard = () => {
    let navigate=useNavigate();
    const handleClick = () =>{
        console.log('Logout ckicked')
        navigate('/login')
    }
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sm={6} sx={{ backgroundColor: 'grey', p: 5, color: 'white' }}>
          <h1>DashBoard</h1>
          <Typography variant='h5'>
            Email: zeeshan@gmail.com
          </Typography>
          <Typography>Name: Zeeshan</Typography>
          <Button
  variant='contained'
  size='large'
  onClick={handleClick}
  sx={{
    mt: 8,
    backgroundColor: orange[500], // Custom color using Material-UI color object
    '&:hover': {
      backgroundColor: orange[700], // Darker color on hover
    },
  }}
>
  Logout
</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
            <ChangePassword/>
        </Grid>
      </Grid>
    </>
  )
}
