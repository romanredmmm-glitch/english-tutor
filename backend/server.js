const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'AI English Tutor Backend running' });
});

// Generate exercise
app.post('/api/generate-exercise', async (req, res) => {
  try {
    const { level, type } = req.body;
    const prompt = `Create a ${type} exercise for English level ${level}. Format: question, options, correct answer, explanation`;
    
    const response = await axios.post(`${OLLAMA_URL}/api/generate`, {
      model: 'mistral',
      prompt: prompt,
      stream: false
    });
    
    res.json({ exercise: response.data.response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate exercise' });
  }
});

// Chat with AI tutor
app.post('/api/chat', async (req, res) => {
  try {
    const { message, level } = req.body;
    const response = await axios.post(`${OLLAMA_URL}/api/generate`, {
      model: 'mistral',
      prompt: `You are an English tutor. Help student at level ${level}.\nStudent: ${message}`,
      stream: false
    });
    res.json({ reply: response.data.response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response' });
  }
});

// Check answer
app.post('/api/check-answer', async (req, res) => {
  try {
    const { question, userAnswer, level } = req.body;
    const prompt = `Check if this answer is correct: "${userAnswer}" for question: "${question}". Level: ${level}. Provide: is_correct (true/false), explanation, score (0-100)`;
    
    const response = await axios.post(`${OLLAMA_URL}/api/generate`, {
      model: 'mistral',
      prompt: prompt,
      stream: false
    });
    res.json({ feedback: response.data.response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check answer' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
  console.log(`📚 Ollama: ${OLLAMA_URL}`);
  console.log(`🚀 Ready for requests!`);
});
