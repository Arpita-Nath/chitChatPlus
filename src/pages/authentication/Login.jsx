import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Inputbox from "../../components/utilities/Inputbox";
import "./auth.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Loginheading = styled(Typography)({
  fontSize: "33px",
  color: ""
});

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  marginTop: '40px',
  width: '100%',
  fontSize: 16,
  padding: '15px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#052f57',
  borderColor: '#0063cc',
  transition: 'all linear 0.3s',

'&:hover': {
    backgroundColor: '#052f57',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#3f85c7',
    borderColor: '#005cbf',
  },
});



const Login = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}> 
          <div>
            <Loginheading variant="h6">
              Login to your account!
            </Loginheading>

            <div className='inputbox'>
              <Inputbox placeholder="Email Address"/>
              <Inputbox placeholder="Password"/>
            </div>
            
            <BootstrapButton variant="contained" disableRipple>
              Login to continue
            </BootstrapButton>

           

          </div>
          
        </Grid>
        <Grid item xs={6}>
          <div style={{background:"red", width:"100%", height:"100vh"}}></div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login