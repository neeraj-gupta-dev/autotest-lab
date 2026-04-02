# 🧪 AutoTest Lab

> A full-stack MERN web application designed as a **live testing playground** for MCA students practicing automated UI testing with Selenium, Playwright, or Cypress.

[![Frontend](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)](https://autotest-lab.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)](https://your-backend.onrender.com)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB_Atlas-47A248?logo=mongodb)](https://cloud.mongodb.com)
[![License](https://img.shields.io/badge/License-ISC-blue)](./LICENSE)

---

## 🖥️ Live Demo

| Service    | URL                                              |
|------------|--------------------------------------------------|
| 🌐 Frontend | [https://autotest-lab.vercel.app](https://autotest-lab.vercel.app) |
| ⚙️ Backend API | `https://your-backend.onrender.com` *(Replace with your Render URL)* |

> **Demo Credentials**
> - **Email:** `admin@example.com`
> - **Password:** `password123`

---

## 📋 Features

### 🔐 Authentication System
- User Registration with validation
- JWT-based Login / Logout
- Protected routes (redirect to login if unauthenticated)

### 🛒 E-Commerce Simulation
- Dynamic product catalog fetched from MongoDB
- Individual product detail view
- Add-to-cart functionality (cart counter badge)
- Ideal for testing full flows: **View Catalog → Select Detail → Trigger Cart**

### 📝 Testing Playgrounds
- **Login & Registration Forms** — with validation triggers
- **Form Elements Page** — inputs, dropdowns, checkboxes, radio buttons
- **Native Browser Alerts** — `alert()`, `confirm()`, `prompt()` dialogs
- **Live Search** — instant product search with debouncing
- **E-Commerce API** — full CRUD simulation against a real REST API

### 💡 Developer-Friendly
- Loading spinners on all async actions
- Elegant empty states for no-data scenarios
- Global error handling (no server crashes)
- Clean JSON API error responses

---

## 🛠️ Tech Stack

| Layer       | Technology                              |
|-------------|-----------------------------------------|
| Frontend    | React 18, Vite, Tailwind CSS v4         |
| Routing     | React Router v6                         |
| Auth        | JWT (JSON Web Tokens), AuthContext      |
| Backend     | Node.js, Express.js                     |
| Database    | MongoDB, Mongoose ODM                   |
| Security    | bcryptjs (password hashing)             |
| HTTP Client | Axios                                   |
| Deployment  | Vercel (Frontend), Render (Backend)     |
| DB Host     | MongoDB Atlas                           |

---

## 📁 Project Structure

```
STQA_Test_Website/
├── client/                    # React + Vite Frontend
│   ├── public/
│   ├── src/
│   │   ├── context/
│   │   │   └── AuthContext.jsx     # Global auth state + Axios config
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── playgrounds/
│   │   │       ├── Products.jsx
│   │   │       ├── FormElements.jsx
│   │   │       ├── Alerts.jsx
│   │   │       └── LiveSearch.jsx
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   └── App.jsx
│   ├── .env                        # VITE_API_URL (local)
│   ├── .gitignore
│   └── package.json
│
├── server/                    # Node.js + Express Backend
│   ├── controllers/
│   │   ├── authController.js
│   │   └── productController.js
│   ├── middleware/
│   │   └── errorMiddleware.js      # Global 404 + error handler
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   ├── seeder.js                   # Database seeding script
│   ├── server.js                   # Entry point
│   ├── .env                        # Secrets (never commit!)
│   ├── .gitignore
│   └── package.json
│
└── README.md
```

---

## ⚙️ Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [MongoDB Compass](https://www.mongodb.com/products/compass) (for local DB)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/autotest-lab.git
cd autotest-lab
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/autotestlab
JWT_SECRET=supersecretautotestlabkey2026
FRONTEND_URL=http://localhost:5173
```

Start the backend:

```bash
npm start
```

> ✅ You should see: `🚀 Server running on port 5000` and `✅ MongoDB Connected`

### 3. Seed the Database (Optional but Recommended)

```bash
npm run seed
```

This will populate the database with:
- **3 demo users** (including `admin@example.com`)
- **8 realistic hardware products** for the E-Commerce playground

### 4. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file inside the `client/` folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

> ✅ Open your browser at: **http://localhost:5173**

---

## 🚀 Deployment

### Backend → Render

1. Push your code to GitHub.
2. Go to [Render.com](https://render.com) → **New Web Service**.
3. Connect your GitHub repo.
4. Set the **Root Directory** to `server`.
5. **Build Command:** `npm install`
6. **Start Command:** `npm start`
7. Add **Environment Variables:**

| Key            | Value                                      |
|----------------|--------------------------------------------|
| `PORT`         | `5000`                                     |
| `MONGO_URI`    | Your MongoDB Atlas connection string       |
| `JWT_SECRET`   | A long, random secret key                  |
| `FRONTEND_URL` | Your Vercel deployment URL                 |

### Frontend → Vercel

1. Go to [Vercel.com](https://vercel.com) → **Add New Project**.
2. Import your GitHub repo.
3. Set the **Root Directory** to `client`.
4. **Framework Preset:** Vite (auto-detected).
5. Add **Environment Variables:**

| Key             | Value                              |
|-----------------|------------------------------------|
| `VITE_API_URL`  | Your Render backend URL            |

---

## 🔑 API Endpoints

### Auth Routes (`/api/auth`)

| Method | Endpoint            | Description          | Auth Required |
|--------|---------------------|----------------------|---------------|
| POST   | `/api/auth/register`| Register a new user  | ❌             |
| POST   | `/api/auth/login`   | Login and get token  | ❌             |

### Product Routes (`/api/products`)

| Method | Endpoint            | Description          | Auth Required |
|--------|---------------------|----------------------|---------------|
| GET    | `/api/products`     | Get all products     | ✅             |
| GET    | `/api/products/:id` | Get single product   | ✅             |

---

## 🎓 Academic Use (STQA - Software Testing & Quality Assurance)

This project is purpose-built as a **test target application** for the MCA Software Testing lab. Students can write automation scripts to test:

- ✅ Login form validation
- ✅ Registration workflows
- ✅ Dynamic content rendering
- ✅ Browser alert handling
- ✅ E-Commerce cart interactions
- ✅ Live search filtering

**Recommended tools:** Selenium WebDriver, Playwright, Cypress

---

## 👤 Author

**Neeraj Gupta**
- GitHub: [@neeraj-gupta-dev](https://github.com/neeraj-gupta-dev)

---

## 📄 License

This project is licensed under the **ISC License**.
