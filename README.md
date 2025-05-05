# 🍽️ Restaurant Menu Management App

A full-stack restaurant menu application built with **MERN (MongoDB, Express, React, Next.Js, Node.js)** and styled using **Tailwind CSS**. The application allows users to view categorized menu items such as **Food**, **Drinks**, and **Brunches** via a clean, responsive UI.

---

## 🔗 Live Demo

🌐 [Click here to view the live app](https://deepnetsoft-test-client.vercel.app/)

---

## ✨ Features

- 🧾 Displays menus by category: Food, Drinks, Brunches
- ⚡ Dynamic data fetch from backend using Axios
- 🎨 Stylish, responsive UI with Tailwind CSS
- 🔁 Smooth button-based filtering of menu items
- 🔌 Connected to MongoDB Atlas for persistent data

---

## 🛠️ Tech Stack

### Frontend:
- React (with Next.js App Router)
- Axios
- Tailwind CSS

### Backend:
- Node.js
- Express
- MongoDB (via Mongoose)
- dotenv
- CORS & Body-Parser

---

## 📂 Project Structure
```bash
project-root/
│
├── client/ # Frontend (Next.js + React)
│ └── components/
│ ├── MenuBtn.tsx
│ └── MenuDetails.tsx
│
├── server/ # Backend (Express + MongoDB)
│ ├── models/
│ │ ├── foodModel.js
│ │ ├── drinksModel.js
│ │ └── brunchModel.js
│ ├── routes/
│ │ ├── foodRoute.js
│ │ ├── drinksRoute.js
│ │ └── brunchRoutes.js
│ └── index.js
│
├── .env # MongoDB credentials
└── README.md

```
---

## 🚀 Getting Started

### 1. Clone the Repository

 ____Setup Backend____
```bash
git clone https://github.com/your-username/restaurant-menu-app.git
cd restaurant-menu-app


cd server
npm install

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/menuDB

node index.js

_____Setup Frontend_____

cd client
npm install
npm run dev
```

🧑‍💻 Author
Developed by Adithyan S

📜 License
This project is licensed under the MIT License.
