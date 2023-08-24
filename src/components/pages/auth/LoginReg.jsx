import React, { useState } from "react";
import { Grid, Card, Tab, Tabs, Box, Typography } from "@mui/material";
import Pic1 from "../../../images/pic1.png";
import { UserLogin } from "./UserLogin";
import { UserRegiteration } from "./UserRegiteration";
import { ShoppingBag } from "@mui/icons-material";

const TabPanel = (props) => {
  const {children, value, index } = props;
  return (
    <div rule="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
    const [value, setValue] = useState(0)
    
    const handleChange = (e,newValue)=>{
        setValue(newValue)
    }
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          xs={12}
          sx={{
            backgroundImage: `url(${Pic1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display : {xs :'none' ,sm :'block'}
          }}
        ></Grid>
        <Grid item lg={5} sm={7}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{mx:6, height:400}}>
              <Box sx={{ borderBottom: 1, borderColor: "devider" }}>
                <Tabs value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  <Tab
                    label="Registeration"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}><UserLogin/></TabPanel>
              <TabPanel value={value} index={1}><UserRegiteration/></TabPanel>
            </Box>
            <Box sx={{mt:12, mb:6}} textAlign='center'>
              <ShoppingBag sx={{color:'purple', fontSize:'100'}}/>
               <Typography sx={{fontWeight:'bold'}} variant="h5">Skytech-Shop</Typography>
      
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
