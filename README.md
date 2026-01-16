# 🎓 AI English Tutor

Interactive AI-powered English learning application with Telegram integration and local LLM (Ollama).

## ✨ Features

- 📚 **7 Levels of English** (A0-C2 CEFR)
- 🤖 **AI Tutor Chat** - Learn conversationally
- 📝 **4 Types of Exercises**:
  - Reading comprehension
  - Writing practice
  - Listening exercises
  - Speaking practice
- 📊 **Progress Tracking** - Points, achievements, statistics
- 🔄 **Adaptive Learning** - Adjusts to your level
- 🚀 **Telegram Integration** - Works as a Telegram Mini App
- 💰 **100% Free** - No API costs (uses local Ollama)

## 🛠️ Tech Stack

**Backend:**
- Node.js + Express.js
- Ollama (Local LLM)
- SQLite/Firebase (optional)

**Frontend:**
- HTML5/CSS3
- Vanilla JavaScript
- Telegram Bot API

**AI Model:**
- Ollama (supports Mistral, Llama, etc.)

## 📋 Installation

See [INSTALLATION.md](./INSTALLATION.md) for detailed setup instructions.

## 🚀 Quick Start

```bash
# 1. Install Ollama
ollama pull llama3.2:1b

# 2. Clone repository
git clone https://github.com/romanredmmm-glitch/english-tutor.git
cd english-tutor

# 3. Setup backend
cd backend && npm install && node server.js

# 4. Setup frontend (in new terminal)
cd frontend && npx http-server -p 8080

# 5. Open in browser
http://localhost:8080
```

## 📁 Project Structure

```
english-tutor/
├── backend/
│   ├── server.js           # Express server with Ollama integration
│   ├── package.json        # Node dependencies
│   └── ...
├── frontend/
│   ├── index.html          # Main UI
│   ├── app.js              # App logic (2000+ lines)
│   ├── styles.css          # Styling
│   └── ...
├── data/
│   └── curriculum.json     # Complete English curriculum
├── docs/
│   ├── INSTALLATION.md
│   ├── QUICK-START.md
│   └── API.md
└── README.md
```

## 💡 How It Works

1. User selects English level (A0-C2)
2. AI tutor generates personalized lessons & exercises
3. User practices:
   - Reading
   - Writing
   - Listening (via text-to-speech)
   - Speaking (via AI chat)
4. System tracks progress and adapts difficulty
5. Earn points and unlock achievements

## 🎯 Learning Paths

- **Complete Course**: All 7 levels with full curriculum
- **Quick Practice**: 10-15 minute daily lessons
- **Conversation Mode**: Free-form chat with AI tutor
- **Exam Prep**: Focused on specific skill areas

## 📱 Telegram Bot Setup

1. Create bot with @BotFather
2. Deploy frontend to Vercel/Firebase (free)
3. Set web app URL in bot settings
4. Users can now learn directly in Telegram!

## 💾 Pricing

✅ **User Side**: 100% FREE
✅ **Your Side**: 
- $0/month for local Ollama
- $0-5/month for hosting (Railway, Render)
- $5-10/month when scaled

## 📚 Curriculum

Includes:
- 2000+ English words
- 50+ grammar rules
- Real-world dialogues
- Example sentences
- 100+ exercises

## 🤝 Contributing

Contributions welcome! Please fork and submit PRs.

## 📄 License

MIT License - Feel free to use and modify

## 🔗 Links

- [Installation Guide](./INSTALLATION.md)
- [Quick Start](./QUICK-START.md)
- [API Documentation](./docs/API.md)
- [Telegram Bot Setup](./docs/TELEGRAM.md)

## 📞 Support

For issues or questions, please create an GitHub issue.

---

**Made with ❤️ for English learners worldwide**
