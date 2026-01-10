# 🎯 Real-Time Interview Platform

A fully functional interview platform that enables real-time collaborative coding with video communication, code execution in multiple languages, and comprehensive interview features.

## ✨ Features

### 👨‍💻 Core Features
- **Multi-Language Code Execution** - Run code in JavaScript, Python, and Java
- **VSCode-Powered Editor** - Professional code editing experience with syntax highlighting
- **Real-time Code Testing** - Instant feedback with automatic test case validation
- **Success Celebrations** - Confetti animation on successful code execution 🎉
- **Practice Problems** - Solo coding mode for individual practice

### 🎥 Video Interview
- **1-on-1 Video Rooms** - Private interview sessions
- **Audio/Video Controls** - Toggle microphone and camera
- **Screen Sharing** - Share your screen during interviews
- **Session Recording** - Record interview sessions
- **Room Locking** - Restrict rooms to exactly 2 participants

### 💬 Communication
- **Real-time Chat** - Instant messaging during interviews
- **Image Sharing** - Upload and share images in chat
- **Emoji Reactions** - Add reactions to messages
- **Live Presence** - See who's online and active

### 🔐 Security & Authentication
- **Clerk Authentication** - Secure user authentication
- **Isolated Code Execution** - Run code in secure sandboxed environments
- **Session Management** - Secure session creation and management

### 📊 Dashboard & Analytics
- **Live Statistics** - Real-time interview metrics
- **Session History** - Track past interviews
- **Performance Insights** - Monitor code execution results

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **TanStack Query** - Data fetching and caching
- **VSCode Editor** - Monaco editor integration

### Backend
- **Node.js** - Runtime environment
- **Express** - REST API framework
- **Inngest** - Background job processing

### Infrastructure
- **Clerk** - Authentication service
- **Sevalla** - Deployment platform (free-tier)

### Development Tools
- **Git & GitHub** - Version control and collaboration
- **CodeRabbit** - Automated PR analysis and code optimization

## 🚀 Getting Started

### Prerequisites
```bash
node >= 18.x
npm or yarn
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/interview-platform.git
cd interview-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Add your credentials:
```env
CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
DATABASE_URL=your_database_url
INNGEST_API_KEY=your_inngest_key
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:3000
```

## 📁 Project Structure
```
interview-platform/
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/
├── backend/           # Node.js backend
│   ├── routes/
│   ├── controllers/
│   └── services/
├── public/            # Static assets
└── README.md
```

## 🎮 Usage

### Creating an Interview Session
1. Sign in with Clerk authentication
2. Navigate to "Create Session"
3. Select coding difficulty level
4. Share the session link with your interviewer/candidate

### During the Interview
- Write and test code in JavaScript, Python, or Java
- Use video/audio controls for communication
- Share your screen when needed
- Chat and share images for better collaboration
- React to messages with emojis

### Code Execution
- Write your solution
- Click "Run Code" to execute
- View test results instantly
- Get confetti on successful execution! 🎉
- Receive notifications on failures

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

CodeRabbit will automatically analyze your PR for optimization suggestions.

## 📝 API Documentation

### Endpoints

#### Authentication
```
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

#### Sessions
```
POST /api/sessions/create
GET  /api/sessions/:id
PUT  /api/sessions/:id/join
```

#### Code Execution
```
POST /api/code/execute
GET  /api/code/results/:id
```

## 🐛 Known Issues

- Screen sharing requires HTTPS in production
- Maximum 2 participants per room enforced
- Code execution timeout set to 30 seconds

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- VSCode team for Monaco Editor
- Clerk for authentication solution
- Sevalla for hosting platform
- CodeRabbit for code review automation

## 📞 Support

For support, email support@yourplatform.com or join our Slack channel.

---

⭐ Star this repo if you find it helpful!
