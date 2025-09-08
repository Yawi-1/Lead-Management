# 📊 Lead Management System (MERN Stack)

A full-stack **Lead Management System** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This application allows users to add, update, view, and manage leads with a simple and clean UI.

---

## 🚀 Live Links

- **Frontend:** [Lead Management UI](https://lead-management11.netlify.app/)  
- **Backend API:** [Lead Management API](https://lead-management-nxjo.onrender.com)  

---

## ✨ Features

- ➕ Add new leads with details (name, email, phone, status, source).
- 📑 View all leads in a list format.
- 🔍 Search and filter leads.

---

## 🛠️ Tech Stack

**Frontend:** React.js, TailwindCSS  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Database:** MongoDB Atlas  
**Deployment:** Netlify (Frontend), Render (Backend)

---

## 📂 Project Setup

### 1️⃣ Clone the repository
```
git clone https://github.com/Yawi-1/Lead-Management.git
cd Lead-Management
```
### 2️⃣ Setup Backend
```
cd backend
npm install
```
## Create a .env file in the backend folder:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
## Start backend server:
``` npm start ```
### 3️⃣ Setup Frontend
```
cd frontend
npm install
npm run dev
```

##  Pages & Navigation Links

Below are the key pages included in this MERN-based Lead Management System, along with their navigation routes.

| Page          | Route               | Description                              |
|---------------|---------------------|------------------------------------------|
| Dashboard     | `/`                 | Summary view with charts and lead stats. |
| Add Lead      | `/leads-form`       | Form to create a new lead.               |
| Leads List    | `/leads-list`       | Table & cards of all leads with controls.|
| 404 Page      | `*` (catch-all)     | Shown for invalid URLs.                  |


## 🔗 API Endpoints

Base URL: `https://lead-management-nxjo.onrender.com/api/leads`

| Method | Endpoint           | Description        | Request Body Example |
|--------|-------------------|--------------------|----------------------|
| GET    | `/api/leads`      | Get all leads      | — |
| POST   | `/api/leads`      | Create new lead    | ```json { "name": "John Doe", "email": "john@example.com", "phone": "9876543210", "status": "New", "source": "Website" } ``` |




