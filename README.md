# Team Phoenix ==>[Harsh Sahu(RA2211056010124),Kushal Rathi(RA2211056010115),Yash Raj Nanda(RA2211056010138)]

A simple team management app built with the MERN stack.

## 🛠 Quick Start

### Prerequisites
- Node.js
- MongoDB

### Setup

1. Clone & Install

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

2. Set up environment
```bash
# In /server create a .env file
MONGODB_URI=your_mongodb_uri
PORT=5000
```

3. Run the app
```bash
cd client #frontend
npm start

cd server #backend
npm start
```

Visit `http://localhost:3000` 

## 🔗 API Routes

### Members
```bash
GET    /api/members     # Get all members
GET    /api/members/:id # Get single member
POST   /api/members     # Add member
```

### POST /api/members
```json
{
  "name": "Member Name",
  "role": "Member Role",
  "email": "email@example.com",
  "profileImage": "file"  // Optional
}
```

##  Team

- Harsh Sahu - Team Lead & Full Stack
- Khushal Rathi - Backend
- Yash Raj Nanda - Frontend

##  Features

-  Add team members with photos
-  View all team members
-  View detailed member profiles
-  Responsive design 
