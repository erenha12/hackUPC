import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

// TODO
// first message not showing up done
// message order done
// loading state
// formatting the incoming message
// UI polish

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

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
    <div style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, background: '#f0f2f5' }}>
      <Box sx={{
        position: 'fixed',
        top: 0,
        bottom: '7em',
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
            backgroundColor: message.sender === 'user' ? '#AEDFF7' : '#D3D3D3',
            padding: '0.5em',
            borderRadius: '10px',
            margin: '0.5em',
            maxWidth: '45%'
          }}>
            {message.text}
          </Typography>
        ))}
      </Box>
      <Box sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1em',
        backgroundColor: '#ffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <form onSubmit={sendMessage}>
          <TextField value={input} onChange={e => setInput(e.target.value)} fullWidth />
          <Button type="submit" color="primary">Send</Button>
          <Button onClick={clearChat} color="secondary">Clear Chat</Button> {}
        </form>
      </Box>
    </div>
  );
}

export default Chat;