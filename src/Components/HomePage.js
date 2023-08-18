import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    // Prevent spaces in the username
    const newUsername = e.target.value.replace(/\s/g, '');
    setUsername(newUsername);
  };

  const handleSubmit = () => {
    if (validateUsername(username)) {
      navigate(`/form/${username}`);
    } else {
      setUsernameError('Username must be at least 4 characters long');
    }
  };

  const validateUsername = (inputUsername) => {
    const trimmedUsername = inputUsername.replace(/\s+/g, '');
    return trimmedUsername.length >= 4;
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to our Questionnaire WebApp
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={handleUsernameChange}
        error={!!usernameError}
        helperText={usernameError}
        sx={{ marginTop: '20px' }}
        required
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginTop: '20px' }}
      >
        Go to Form Page
      </Button>
    </Container>
  );
};

export default HomePage;
