# 🔐 Authentication System | React + FastAPI + SQLite

A full-stack authentication system built using **React.js**, **FastAPI**, and **SQLite**. This project demonstrates the complete authentication workflow, including user registration, login, password reset, session handling, and logout functionality.

---

## 🚀 Features

* User Registration (Signup)
* User Login Authentication
* Forgot Password / Password Reset
* Session Management using Local Storage
* Dynamic User Interface based on Login State
* Logout Functionality
* FastAPI REST APIs
* SQLite Database Integration
* CORS Configuration for Frontend-Backend Communication

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* CSS

### Backend

* FastAPI
* Python
* SQLite

### Database

* SQLite

---

## 📂 Project Structure

```text
Authentication-System/
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Header.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Forget.jsx
│   │   ├── App.jsx
│   │   └── ...
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   └── api.py
│   │
│   └── database/
│       └── career.db
│
└── README.md
```

---

## 🔄 Authentication Flow

### 1️⃣ Signup

* User enters name, email, and password.
* Frontend sends data to the FastAPI backend.
* Backend stores user information in SQLite.

### 2️⃣ Login

* User enters email and password.
* Backend validates credentials from the database.
* On successful login, user details are returned.

### 3️⃣ Session Handling

* User information is stored in localStorage.
* Header dynamically displays the logged-in user's name.

### 4️⃣ Logout

* Session data is removed from localStorage.
* User is logged out and UI is updated.

### 5️⃣ Password Reset

* User provides registered email and a new password.
* Backend verifies the email and updates the password.

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/authentication-system.git
cd authentication-system
```

---

### Backend Setup

```bash
cd backend/src

pip install fastapi uvicorn

uvicorn api:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

### Frontend Setup

```bash
cd frontend

npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 📌 API Endpoints

### Signup

```http
POST /signup
```

Request:

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}
```

---

### Login

```http
POST /login
```

Request:

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "login success",
  "name": "John",
  "email": "john@gmail.com"
}
```

---

### Forget Password

```http
POST /forgetpass
```

Request:

```json
{
  "email": "john@gmail.com",
  "password": "newpassword"
}
```

---

## 🎯 Learning Outcomes

Through this project, I gained hands-on experience with:

* Full Stack Development
* React State Management
* FastAPI Backend Development
* SQLite Database Operations
* REST API Design
* Authentication Workflow
* Frontend-Backend Integration
* CORS Handling

---

## 🚀 Future Improvements

* JWT Authentication
* Password Hashing (bcrypt)
* Protected Routes
* Role-Based Access Control
* User Dashboard
* Deployment on Cloud Platforms

---

## 👨‍💻 Author

**Boby Gupta**



---

⭐ If you found this project useful, consider giving it a star on GitHub!
