# Regional OTT Backend (Nepal Province Based)

Backend API for a Province-Based Regional OTT Platform built with **Node.js, Express, and MongoDB**.

This platform delivers personalized video streaming content based on Nepal’s provinces.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Cloudinary (for video/image storage)
* REST API Architecture

---

## Project Structure

```
backend/
│
├── src/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

## Features

### Authentication

* User Registration
* User Login
* JWT-based Authentication
* Role-based Authorization (Admin/User)

### Video Management

* Upload videos (Cloudinary)
* Province-based video filtering
* Popular videos per province
* Admin video management

### Province-Based Logic

* Content categorized by Nepal Provinces
* Personalized content feed
* Province-specific trending logic

### Watch History

* Track user watch history
* Calculate engagement score
* Improve recommendations

---

## Installation

### Clone Repository

```
git clone https://github.com/Itsme-Mingmar/regional-ott-backend.git
cd regional-ott-backend
```

### Install Dependencies

```
npm install
```

### Setup Environment Variables

Create a `.env` file in root:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:5173
```

### Run Server

Development mode:

```
npm run dev
```

Production mode:

```
npm start
```

---

## API Base URL

```
http://localhost:5000/api
```

---

## API Routes Overview

### Auth

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

### Videos

```
GET    /api/videos
GET    /api/videos/:id
POST   /api/videos (Admin)
DELETE /api/videos/:id (Admin)
```

### Provinces

```
GET    /api/provinces
GET    /api/provinces/:id/videos
```

### Watch History

```
POST   /api/watch
GET    /api/watch/history
```

---

## Architecture Pattern

* MVC (Model-View-Controller)
* Middleware-based authentication
* Modular route structure
* Scalable folder organization

---

## Future Improvements

* HLS Streaming Support
* Recommendation Engine
* Analytics Dashboard
* Subscription Integration
* CDN Optimization

---

## Author

Developed as a Full-Stack Regional OTT Platform Project.

---

## License

This project is for educational and demonstration purposes.
