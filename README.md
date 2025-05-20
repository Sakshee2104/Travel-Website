# Airbnb Clone 🏡

A full-stack Airbnb Clone built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. This application allows users to book stays, host their own properties, and explore a range of travel destinations.

## ✨ Features

- 🔐 User Authentication (Login / Signup)
- 📍 Browse listings with details and images
- 🏠 Add and manage your own property listings
- 📆 Bookings with check-in/check-out dates
- 💬 Messaging between hosts and guests *(optional)*
- 🗺️ Interactive map view *(if implemented using Map APIs)*

## 🚀 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS / Bootstrap *(depending on your choice)*
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JSON Web Tokens (JWT) for Authentication

**Other Tools:**
- Cloudinary / Firebase for image uploads *(if used)*
- Mapbox / Google Maps API *(optional)*
- Postman (for API testing)

## 📂 Project Structure

```bash
airbnb-clone/
├── client/             # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
├── server/             # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
└── README.md
