import React from "react";
import { Typography, Button, Container, Grid, Paper } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Grid container spacing={3} sx={{mt:2}}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Welcome to Our Website
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis quis arcu eu posuere.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Nulla facilisi. Vestibulum ut est quis velit euismod egestas at
              nec odio.
            </Typography>
            <Grid item xs={12} textAlign="center">
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" paragraph>
              We are a passionate team dedicated to providing top-notch services
              to our clients.
            </Typography>
            <Typography variant="body2" paragraph>
              Our mission is to deliver excellence in every aspect of our work
              and exceed customer expectations.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Services
            </Typography>
            <Typography variant="body2" paragraph>
              - Web development
            </Typography>
            <Typography variant="body2" paragraph>
              - Testing
            </Typography>
            <Typography variant="body2" paragraph>
              - Debugging
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
