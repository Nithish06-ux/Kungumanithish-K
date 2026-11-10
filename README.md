# Kungumanithish - Portfolio Website

A modern, professional portfolio website built with the **PERN Stack** (PostgreSQL, Express.js, React.js, Node.js).

![PERN Stack](https://img.shields.io/badge/Stack-PERN-blueviolet?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-4169E1?style=for-the-badge&logo=postgresql)

## ✨ Features

- 🎨 **Stunning Dark Theme** with glassmorphism, gradient accents, and animated particles
- 🎬 **Smooth Animations** powered by Framer Motion (scroll reveals, typewriter, counters)
- 📱 **Fully Responsive** design for all screen sizes
- 📧 **Contact Form** with EmailJS integration + PostgreSQL storage
- 🔒 **Secure Backend** with Helmet, CORS, and rate limiting
- ⚡ **Fast** Vite-powered frontend with optimized builds

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React.js, Tailwind CSS, Framer Motion |
| Backend    | Express.js, Node.js               |
| Database   | PostgreSQL                         |
| Build Tool | Vite                               |
| Email      | EmailJS                            |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/Nithish06-ux/nithishkportfolio.git
cd nithishkportfolio
```

### 2. Setup PostgreSQL Database
```bash
# Create the database
psql -U postgres -c "CREATE DATABASE portfolio_db;"

# Run the schema
psql -U postgres -d portfolio_db -f server/models/schema.sql
```

### 3. Setup Backend
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run dev
```

### 4. Setup Frontend
```bash
cd client
npm install
cp .env.example .env
npm run dev
```

### 5. Open in browser
Visit `http://localhost:5173`

## 📁 Project Structure

```
nithishkportfolio/
├── client/                 # React.js Frontend
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── hooks/          # Custom React Hooks
│   │   ├── api/            # API client functions
│   │   ├── data/           # Fallback portfolio data
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express.js Backend
│   ├── config/             # Database configuration
│   ├── routes/             # API routes
│   ├── models/             # SQL schemas
│   ├── middleware/          # Express middleware
│   ├── index.js
│   └── package.json
└── README.md
```

## 📬 Contact

- **Email:** kungumanithish@gmail.com
- **LinkedIn:** [kungumanithish-k](https://www.linkedin.com/in/kungumanithish-k)
- **GitHub:** [Nithish06-ux](https://github.com/Nithish06-ux)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Kungumanithish using the PERN Stack
