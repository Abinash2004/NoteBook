# 🗒️ NoteKeeper – Secure MERN Note-Taking App

**NoteKeeper** is a full-stack, user-focused note management app built with the **MERN stack** — MongoDB, Express.js, React, and Node.js.

It allows users to securely create, update, and delete personal notes with real-time functionality and modern UI. Every note is **scoped to the authenticated user**, meaning your notes are truly yours. No peeking, no sharing, just your private notes stored safely in MongoDB.

---

## ✨ Features

- 🔐 **Authentication** – JWT-based login & signup
- 📝 **Full CRUD** – Create, read, update, and delete your own notes
- 📦 **Private Notes** – User-specific notes, completely isolated per account
- 💨 **Responsive Frontend** – React-based UI that adapts across devices
- ☁️ **MongoDB Database** – Notes stored in a secure NoSQL database
- ⚙️ **RESTful API** – Clean Express.js backend with proper routing & validation

---

## 🛠 Tech Stack

- **Frontend:** React.js, Context API, React Router, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (with Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Tools:** Postman, VS Code, Git & GitHub

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/NoteKeeper.git
cd NoteKeeper

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Add .env file with your MongoDB URI and JWT_SECRET
touch .env
