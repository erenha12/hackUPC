import React, { useState, useEffect } from 'react';
import { Card, CardContent, TextField, Grid, Typography, Container, InputAdornment, CardMedia } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [cities, setCities] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch city data from the backend when the component mounts
    fetch('http://localhost:8000/city/cities/')
      .then(response => response.json())
      .then(data => setCities(data.cities))
      .catch(error => console.error('Error fetching cities:', error));
  }, []);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const getTransform = (isSelected) => {
    if (!isSelected) return 'none';
    return 'translate(-50%, -50%) scale(2.5)';
  };

  const filteredCities = cities.filter(city => 
    city.city.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const goToChat = () => {
    navigate('/chat');
  };

  const images = importAll(require.context('./assets/pictures', false, /\.(png|jpe?g|svg)$/));

  return (
    <div>
      <Button onClick={goToChat}>Go to Chat</Button>
      <div style={{ width: '100%', height: '100%', background: '#f0f2f5', overflow: 'auto' }}>
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
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Grid container spacing={3} style={{ overflow: 'auto' }}>
            {filteredCities.map((city, index) => (
              <Grid item xs={6} sm={4} key={index}>
                <Card
                  sx={{height: '100%'}}
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
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <CardContent style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5em'}}>
                      <Typography variant="h5">{city.city}</Typography>
                      <Typography variant="subtitle2">({city.country})</Typography>
                    </div>
                    <div style={{ flexGrow: 1, background: 'url(logo.svg)', backgroundSize: 'cover', marginBottom: '20px' }}>
                      <CardMedia component="img" height="100px" src={images[`${city.city}.jpeg`]} />
                    </div>
                    <Typography variant="h6">${city.avgmonthlynetsalary}/month</Typography>
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
    </div>
  );
};

export default Dashboard;