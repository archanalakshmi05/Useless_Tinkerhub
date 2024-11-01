// server.js
import express from 'express';
import mongoose from './database.js';

const app = express();

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Chatbot server is running');
});

const PORT = 3001; // Or another available port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

