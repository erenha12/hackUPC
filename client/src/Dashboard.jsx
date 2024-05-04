import React, { useState } from 'react';
import { Card, CardContent, TextField, Grid, Typography, Container, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';  

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const getTransform = (isSelected) => {
    if (!isSelected) return 'none';
    return 'translate(-50%, -50%) scale(2.5)';
  };

  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, background: '#f0f2f5' }}>
      <Container style={{ padding: '20px', maxWidth: '960px', margin: 'auto', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TextField
          fullWidth
          label="Search for a city..."
          variant="outlined"
          style={{ marginBottom: '20px', zIndex: 2, borderColor: '#ced4da' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Grid container spacing={3} style={{ overflow: 'hidden' }}>
          {[1, 2, 3].map((index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                onClick={() => handleCardClick(index)}
                style={{
                  cursor: 'pointer',
                  transform: getTransform(selectedCard === index),
                  transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)', 
                  position: selectedCard === index ? 'fixed' : 'static',
                  left: selectedCard === index ? '50%' : undefined,
                  top: selectedCard === index ? '50%' : undefined,
                  zIndex: selectedCard === index ? 3 : 1,
                  overflow: 'visible', 
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              >
                <CardContent style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                  <Typography variant="h5" style={{ marginBottom: '10px' }}>City Name</Typography>
                  <div style={{ flexGrow: 1, background: 'url(logo.svg)', backgroundSize: 'cover', marginBottom: '20px' }}>
                    {/* Image container */}
                  </div>
                  <Typography variant="h6">$2000/month</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {selectedCard !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 2,
            transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1)' 
          }}
          onClick={() => setSelectedCard(null)} 
        />
      )}
    </div>
  );
};

export default Dashboard;
