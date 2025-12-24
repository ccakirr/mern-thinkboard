# ThinkBoard 📝

A modern, full-stack note-taking application built with the MERN stack.

## ✨ Features

- 📝 Create, read, update, and delete notes
- 🎨 Modern UI with TailwindCSS and DaisyUI
- 🚦 Rate limiting with Upstash Redis
- 🔔 Real-time toast notifications
- 📱 Responsive design
- 🌲 Forest theme

## 🛠️ Tech Stack

**Frontend:**

- React
- React Router DOM
- Axios
- TailwindCSS
- DaisyUI
- React Hot Toast
- Lucide Icons

**Backend:**

- Node.js
- Express.js
- MongoDB (Mongoose)
- Upstash Redis (Rate Limiting)
- CORS

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB account
- Upstash Redis account

### Installation

1. Clone the repository

```bash
git clone https://github.com/ccakirr/mern-thinkboard.git
cd mern-thinkboard
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

4. Configure environment variables

Create a `.env` file in the `backend` directory:

```env
MONGODB_LINK=your_mongodb_connection_string
PORT=3000
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
NODE_ENV=development
```

### Running the Application

**Development Mode:**

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

**Production Mode:**

Build the frontend:

```bash
cd frontend
npm run build
```

Start the server:

```bash
cd ../backend
npm start
```

## 📁 Project Structure

```
mern-thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Caner Çakır**

- GitHub: [@ccakirr](https://github.com/ccakirr)
