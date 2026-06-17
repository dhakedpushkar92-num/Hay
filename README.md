# 🚀 Hay - Premium AI Chat Application

एक premium, fast, और modern AI chat application जो Next.js 14 के साथ built है।

## ✨ Features

- ⚡ **Super Fast** - Next.js 14 App Router के साथ optimized performance
- 🎨 **Premium UI** - Tailwind CSS के साथ modern design
- 💬 **Real-time Chat** - Smooth messaging interface
- 🌙 **Dark Mode** - Eye-friendly dark theme
- 📱 **Responsive** - Mobile, tablet, और desktop के लिए optimized
- 🔒 **Secure** - TypeScript के साथ type-safe
- 🚀 **Production Ready** - Best practices follow करता है

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **State Management**: Zustand
- **API Client**: Axios
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Backend**: Node.js (API routes)
- **Database**: MongoDB (optional)
- **Auth**: JWT (optional)

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/dhakedpushkar92-num/Hay.git
cd Hay

# Install dependencies
npm install

# Create .env.local file
cp .env.local.example .env.local

# Add your API keys
# NEXT_PUBLIC_OPENAI_API_KEY=your_key_here
# OPENAI_API_KEY=your_key_here
```

### Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build the app
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
Hay/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── providers.tsx       # Context providers
│   │   ├── globals.css         # Global styles
│   │   └── api/                # API routes
│   ├── components/
│   │   ├── Header.tsx          # Header component
│   │   ├── ChatInterface.tsx   # Main chat
│   │   └── MessageBubble.tsx   # Message component
│   ├── lib/
│   │   └── api.ts              # API utilities
│   └── store/
│       └── chatStore.ts        # Zustand store
├── public/                      # Static files
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind config
└── postcss.config.js           # PostCSS config
```

## 🎯 Performance Optimizations

- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minification
- ✅ Compression
- ✅ Caching strategies
- ✅ Fast API routes

## 🔐 Security

- ✅ Environment variables protection
- ✅ CORS configuration
- ✅ Input validation
- ✅ XSS protection
- ✅ Rate limiting (ready to implement)

## 📦 API Integration

### Chat API

```bash
POST /api/chat
Content-Type: application/json

{
  "message": "नमस्ते"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💻 Author

**Pushkar Dhaked**
- GitHub: [@dhakedpushkar92-num](https://github.com/dhakedpushkar92-num)

## 🎉 Thanks

धन्यवाद! Happy coding! 🚀
