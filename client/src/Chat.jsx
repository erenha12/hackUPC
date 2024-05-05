import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';

function renderWithLineBreaks(inputString) {
  return inputString.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
}

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sendMessage = async (event) => {
    event.preventDefault();
    const trimmedInput = input.replace(/\s+/g, '');
    if (trimmedInput) {
      setMessages(prevMessages => [...prevMessages, { text: input, sender: 'user' }]);
      setInput(''); 
  
      await backendRequest(trimmedInput);
    }
  };
  
  const clearChat = () => {
    setMessages([]); 
  };

  const goToDashboard = () => {
    navigate('/');
  };

  const backendRequest = async (userInput) => {
    const baseUrl = 'http://localhost:8000/chat/advisor/'
    const queryParams = { query: userInput };
    const queryString = new URLSearchParams(queryParams).toString();
    const url = `${baseUrl}?${queryString}`;

    try {
        setLoading(true)
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Something went wrong.');
        }
        const data = await response.json();
        setMessages(prevMessages => [...prevMessages, { text: data.response, sender: 'bot' }]);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        setLoading(false)
    }
  };

  return (
    <div>
      <Button onClick={goToDashboard}>Go to Dashboard</Button>
      <div style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, background: '#F2F2F2' }}>
        <Box sx={{
          position: 'fixed',
          top: 0,
          bottom: '13em',
          left: 0,
          right: 0,
          overflowY: 'auto',
          padding: '2em',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
        }}>
          {messages.map((message, index) => (
            <Typography key={index} sx={{
              alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: message.sender === 'user' ? '#AEDFF7' : '#ECD3ECFF',
              padding: '0.5em',
              borderRadius: '10px',
              margin: '0.5em',
              maxWidth: '45%'
            }}>
              {renderWithLineBreaks(message.text)}
            </Typography>
          ))}
        </Box>
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '2em',
          backgroundColor: '#ffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <form onSubmit={sendMessage}>
            <div style={{width: '70vw', margin: '1em 0'}}>
              <TextField sx={{height: '100%'}} disabled={loading} value={input} onChange={e => setInput(e.target.value)} fullWidth />
            </div>
            <div style={{display: 'flex', flexDirection: 'row-reverse', gap: '1em'}}>
              <LoadingButton size="large" type="submit" color="primary" variant="contained" loading={loading} endIcon={<SendIcon />} loadingPosition="end"><span>Send</span></LoadingButton>
              <Button size="large" onClick={clearChat} color="secondary" variant="outlined">Clear Chat</Button>
            </div>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default Chat;