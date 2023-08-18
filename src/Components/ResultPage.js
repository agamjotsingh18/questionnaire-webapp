import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Paper, Typography, Container, Button } from '@mui/material';

function ResultPage() {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleAnotherForm = () => {
    navigate(`/form/${username}`);
  };
      return (
        <Container maxWidth="sm" sx={{ marginTop: 4 }}>
          <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Congratulations!
            </Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
              Your form has been successfully submitted.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/"
              sx={{ marginRight: 2 }}
            >
              Return to Home
            </Button>
            {/* added logic to redirect to form page if wanted to to submit another form */}
            <Button variant="contained" type="button" onClick={handleAnotherForm}>
              Submit Another Form
            </Button>
          </Paper>
        </Container>
      );
    }
    
    export default ResultPage;
    