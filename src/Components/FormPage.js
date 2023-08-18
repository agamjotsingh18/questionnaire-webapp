import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Paper, Typography, Container } from '@mui/material';

function FormPage() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    name: '',
    dob: '',
  });

  useEffect(() => {
    // fetching username to use for getting details if previously entered
    fetchDataByUsername(username);
  }, [username]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // after form submission redirect to result page
    console.log('Form data:', formData);
    // Redirect to ResultPage
    navigate(`/result/${username}`);
  };

  const handleCancel = () => {
    // if cancel button clicked, redirect to HomePage
    navigate('/');
  };

  const fetchDataByUsername = async (username) => {
    try {
      // Fetching the data from an API endpoint based on the username
      const response = await fetch(`http://localhost:3000/form/${username}`);
      
      if (response.ok) {
        const data = await response.json();
  
        // Check if the data is correctly parsed
        console.log('Fetched data:', data);
        
      const formattedDob = data.dob.replace(/(\d{2})(\d{2})(\d{4})/, '$3-$2-$1');
  
        setFormData({
          phoneNumber: data.phoneNumber,
          email: data.email,
          name: data.name,
          dob: formattedDob,
        });
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };
  
 
  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
    <Paper elevation={3} sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Form Page
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* textfields as mentioned on assignment  */}
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          fullWidth
          required
          pattern="^[0-9]{3}[0-9]{3}[0-9]{4}$"
          title="Please enter a valid phone number (XXX-XXX-XXXX)"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleInputChange}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            sx={{ marginBottom: 2 }}
          />
          <Grid container justifyContent="space-between">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button type="button" variant="contained" onClick={handleCancel}>
              Cancel
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default FormPage;
