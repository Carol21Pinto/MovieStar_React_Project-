<div align="center">

# 🎬 **MOVIESTAR** 🍿  
<em style="font-size:1.1rem; color:#666;">Search • Explore • Enjoy ✨</em>  

![License](https://img.shields.io/github/license/Carol21Pinto/MovieStar_React_Project-?style=for-the-badge)
![Top Language](https://img.shields.io/github/languages/top/Carol21Pinto/MovieStar_React_Project-?style=for-the-badge)
![Open Issues](https://img.shields.io/github/issues/Carol21Pinto/MovieStar_React_Project-?style=for-the-badge)
![Contributors](https://img.shields.io/github/contributors/Carol21Pinto/MovieStar_React_Project-?style=for-the-badge)

</div>

---
## 🛠 Tech Stack

| Category         | Technologies                                                                 |
|------------------|------------------------------------------------------------------------------|
| 🎨 **Frontend**     | React, Context API, Axios                                                   |
| 🧠 **State Management** | React Context API                                                         |
| 🌐 **Backend**       | Node.js, Express                                                           |
| 🗄️ **Database**       | MongoDB, Mongoose                                                          |
| 🔐 **Authentication** | JWT (JSON Web Tokens), bcrypt                                             |
| 💅 **Styling**        | CSS with custom Dark Theme                                                 |
| 🎬 **APIs Used**      | [TMDb API](https://www.themoviedb.org/), [YouTube API](https://developers.google.com/youtube/) |

---
## 🧐 Overview

**MovieStar** is a full-stack **MERN** web application built for movie lovers. Users can:

- 🔎 Browse trending & upcoming films  
- 🧠 Search any movie with instant suggestions  
- 🎥 Watch trailers inside the app  
- 📋 View movie details including cast, rating, overview  
- 🌟 Create a personalized watchlist  
- 🔐 Sign up/login with secure authentication

Responsive, performant, and visually appealing with a dark UI theme.

---

## ✨ Features

- 🎬 **Trending & Upcoming Movies** on the homepage  
- 🔍 **Instant Search** with suggestions  
- ▶️ **Embedded Trailers** via YouTube iframe  
- 📝 **Movie Details**: overview, release date, ratings  
- 👥 **Cast Profiles** with images  
- 📌 **Personal Watchlist** (managed via Context API)  
- 🔐 **Authentication** (JWT + bcrypt)  
- 🌓 **Dark Theme** UI with hover effects  
- ⚙️ **Robust Error Handling** & loading states

---

## 🎥 Demo

> 🚀 **Live demo coming soon**  
> _Insert link or deployment status here_  
>  
> ![Demo Preview](link-to-demo.gif)

---

## ⚙️ Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- Node.js ≥ 16.x  
- npm ≥ 8.x (or yarn)  
- MongoDB (local or [Atlas](https://www.mongodb.com/cloud/atlas))  
- [TMDb API Key](https://www.themoviedb.org/)  
- YouTube API Key *(optional for trailers)*

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Carol21Pinto/MovieStar_React_Project-.git
cd MovieStar_React_Project-

### 2. Create `.env` File

```dotenv
PORT=5000
MONGO_URI=your-mongodb-uri
TMDB_API_KEY=your-tmdb-api-key
JWT_SECRET=your-jwt-secret
```

### 3. Install Dependencies

```bash
# Backend
npm install

# Frontend
cd client
npm install
```

---

## 💻 Usage

### Run the App Locally

```bash
# Start backend
npm run server
# Runs on http://localhost:5000
```

```bash
# Start frontend
cd client
npm start
# Runs on http://localhost:3000
```

🧪 You can now **sign up**, **log in**, and begin exploring movies!

---

## ✅ Testing

This project uses **Jest** and **React Testing Library** for unit and integration testing.

```bash
npm test
```

---

## 📁 Project Structure

```bash
/
├── client/              # React frontend
│   ├── public/
│   └── src/
│       ├── components/  # Reusable UI
│       ├── context/     # Auth & Watchlist context
│       ├── pages/
│       ├── styles/
│       └── App.js
├── controllers/         # Express route handlers
├── models/              # Mongoose schemas
├── routes/              # API endpoints
├── middleware/          # Auth middleware
├── .env
└── server.js
```

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "feat: add something cool"`)
4. Push the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

✅ Please follow code style guidelines and add meaningful commit messages.

---

## 📝 License

This project is licensed under the [MIT License](https://github.com/Carol21Pinto/MovieStar_React_Project-/blob/main/LICENSE).

---

## 📬 Contact

> Have questions, suggestions, or just want to connect?

**👩‍💻 Carol Pinto**

- 📧 Email: [carolpintopintopinto@gmail.com](mailto:carolpintopintopinto@gmail.com)
- 🐙 GitHub: [@Carol21Pinto](https://github.com/Carol21Pinto)

---

## 🙏 Acknowledgments

Big thanks to the amazing tools and platforms that powered this project:

- 🎬 **[TMDb API](https://www.themoviedb.org/)** — For providing rich movie and series data  
- 📺 **[YouTube API](https://developers.google.com/youtube/)** — For enabling trailer access  
- ⚛️ **[Create React App](https://create-react-app.dev/)** — For bootstrapping the frontend quickly and easily  

> 💡 This project wouldn’t have been possible without the support of these fantastic resources.


---
## 👥 Collaborators

| 👤 Name             | 🌐 GitHub Profile                               |
|--------------------|-------------------------------------------------|
| ✨ Carol Pinto      | [@Carol21Pinto](https://github.com/Carol21Pinto) |
| 🚀 Rahul M          | [@RahulMGatty](https://github.com/RahulMGatty)   |
| 🕷️ Ashith Fernandes | [@spideyashith](https://github.com/spideyashith) |

> Built with ❤️ by a passionate team of developers.
---
<p align="center">
  <strong>✨ Thank You for Exploring MovieStar! ✨</strong><br/>
  We hope you enjoyed browsing through our project.  
  Feel free to ⭐️ star it, contribute, or share feedback!
</p>

<br/>

<p align="center">
  <strong>© 2024–2025</strong> • <a href="https://github.com/Carol21Pinto/MovieStar_React_Project-">MovieStar</a><br/>
  All rights reserved.
</p>



