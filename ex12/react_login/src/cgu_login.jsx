import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
      Copyright © CGU Web Programming {new Date().getFullYear()}.
    </Typography>
  );
}
 
const defaultTheme = createTheme();
 
export default function CGU_Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    alert('登入成功！\nEmail: ' + data.get('email'));
  };
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', height: '100vh' }}>
       
        {/* 左邊圖片 */}
        <Box
          sx={{
            flex: 7,
            backgroundImage: "url('https://picsum.photos/id/1015/2000/1200')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', md: 'block' }
          }}
        />
 
        {/* 右邊表單 */}
        <Box
          sx={{
            flex: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            backgroundColor: 'white'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
         
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Sign in to CSIE@CGU
          </Typography>
 
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 400 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}