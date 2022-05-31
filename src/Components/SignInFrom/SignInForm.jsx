import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleValues () {
        let user = {
            email,
            password
        }
        console.log(user);
    }

    return (
        <Box display={"flex"} flexDirection={'column'} alignItems={"center"} justifyContent="center" height={"40vh"}> 
        
        <Typography variant="h4" component="h2">
           Sign In </Typography>

           <TextField  
           value={email}
           onChange={(e)=> setEmail(e.target.value)}
           style={{width: '40%', margin:"10px"}} 
           id="outlined-basic" 
           label="Email" 
           variant="outlined" />
           
           <TextField 
           value={password}
           onChange={(e)=> setPassword(e.target.value)}
           style={{width: '40%', margin:"10px"}} 
           id="outlined-basic" 
           label="Password" 
           variant="outlined" />

           <Button onClick={handleValues}
           style={{width: '40%', margin:"10px"}} 
           variant="contained">Sign In</Button>
        </Box>
    );
};

export default SignInForm;