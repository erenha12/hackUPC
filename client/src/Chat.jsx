import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null); // Reference to help with autoscroll

  const sendMessage = (event) => {
    event.preventDefault();
    const trimmedInput = input.replace(/\s+/g, '');
    if (trimmedInput) {
      setMessages(prevMessages => [...prevMessages, { text: input, sender: 'user' }]);
      setInput(''); 
  
      mockBackendRequest(trimmedInput).then(response => {
        setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]);
      });
    }
  };
  
  const clearChat = () => {
    setMessages([]); 
  };

  const mockBackendRequest = async (userInput) => {
    return new Promise(resolve => setTimeout(() => resolve(`Received: ${userInput}`), 500));
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, background: '#f0f2f5' }}>
      <Box sx={{
        position: 'fixed',
        top: 0,
        bottom: '3em', 
        left: 0,
        right: 0,
        overflowY: 'auto', 
        padding: '1em',
        display: 'flex',
        flexDirection: 'column-reverse',
      }}>
        {messages.map((message, index) => (
          <Typography key={index} sx={{
            alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: message.sender === 'user' ? '#AEDFF7' : '#D3D3D3', 
            padding: '0.5em',
            borderRadius: '10px',
            margin: '0.5em',
          }}>
            {message.text}
          </Typography>
        ))}
        <div ref={bottomRef} />
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