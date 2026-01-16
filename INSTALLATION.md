# Installation Guide

## Prerequisites
- Node.js (v14+)
- npm or yarn
- Ollama (installed locally)

## Step 1: Download Ollama

Download from: https://ollama.com/download

```bash
# After installation, download a language model
ollama pull mistral
# OR for faster startup use smaller model:
ollama pull llama3.2:1b
```

## Step 2: Clone Repository

```bash
git clone https://github.com/romanredmmm-glitch/english-tutor.git
cd english-tutor
```

## Step 3: Setup Backend

```bash
cd backend
npm install
node server.js
```

You should see:
```
✅ Backend running on port 3000
📚 Ollama: http://localhost:11434
🚀 Ready for requests!
```

## Step 4: Setup Frontend (new terminal)

```bash
cd frontend
npm install -g http-server  # If not installed
http-server -p 8080
```

## Step 5: Open in Browser

Navigate to: http://localhost:8080

## Configuration

Create `.env` file in backend folder:

```
PORT=3000
OLLAMA_URL=http://localhost:11434
```

## Troubleshooting

**Ollama not responding:**
- Make sure Ollama service is running
- Check if running on correct port (11434)
- Try: `curl http://localhost:11434/api/tags`

**Backend errors:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node -v`

**CORS errors:**
- Backend must be running on port 3000
- Frontend on different port (8080)

## For Telegram Bot

See [TELEGRAM.md](./docs/TELEGRAM.md) for setup instructions
