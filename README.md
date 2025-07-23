
 <div align="center">

## 🎬 **MOVIESTAR** 🍿

  <em align="center" style="color:#555; font-size:1.2em;">Search • Explore • Enjoy ✨</em>
  </div>

  <p align="center">
    <img src="https://img.shields.io/github/license/Carol21Pinto/MovieStar_React_Project-?style=for-the-badge" alt="License Badge"/>
    <img src="https://img.shields.io/github/languages/top/Carol21Pinto/MovieStar_React_Project-?style=for-the-badge" alt="Top Language Badge"/>
    <img src="https://img.shields.io/github/issues/Carol21Pinto/MovieStar_React_Project-?style=for-the-badge" alt="Issues Badge"/>
    <img src="https://img.shields.io/github/contributors/Carol21Pinto/MovieStar_React_Project-?style=for-the-badge" alt="Contributors Badge"/>
  </p>

## 🛠 Built With

- **Frontend:** React, Context API, Axios  
- **Backend:** Node.js, Express  
- **Database:** MongoDB, Mongoose  
- **Auth:** JWT, bcrypt  
- **Styling:** CSS (Custom Dark Theme)  
- **External APIs:** TMDb, YouTube (embedded trailers)

---

## 📖 Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Demo](#demo)  
4. [Prerequisites](#prerequisites)  
5. [Installation](#installation)  
6. [Usage](#usage)  
7. [Running Tests](#running-tests)  
8. [Project Structure](#project-structure)  
9. [Contributing](#contributing)  
10. [License](#license)  
11. [Contact](#contact)  
12. [Acknowledgments](#acknowledgments)

---

## 🧐 Overview

MovieStar is a full-stack MERN application tailored for movie enthusiasts. It lets users:

- **Browse** trending & upcoming movies  
- **Search** any movie by title  
- **Watch** trailers without leaving the app  
- **View** movie details, overview & cast  
- **Save** favorites with a personal watchlist  
- **Securely** sign up, log in & log out  

Built for responsiveness and performance, MovieStar offers an engaging, dark-themed UI with smooth client-side routing.

---

## ✨ Features

- 🎬 **Trending & Upcoming** movie sections on the homepage  
- 🔎 **Instant Search** with live suggestions  
- ▶️ **Embedded Trailers** via YouTube iframe  
- 📋 **Movie Details**: overview, release date, rating  
- 🎭 **Cast Profiles** with headshots  
- 🌟 **Watchlist** powered by React Context  
- 🔒 **Auth Flow**: JWT + bcrypt, signup/login/logout  
- 🎨 **Dark Theme** with hover overlays on posters  
- ⚙️ **Error Handling** & loading spinners for API calls  

---

## 🎥 Demo

> Live demo coming soon! (or link here if deployed)  
> ![Demo GIF](link-to-demo.gif)

---

## 🛠 Prerequisites

- **Node.js** ≥ 16.x  
- **npm** ≥ 8.x (or **yarn**)  
- **MongoDB** running (local or Atlas)  
- **TMDb API Key**  
- **YouTube API Key** (optional if you embed trailers via TMDb)

---

## 🚀 Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Carol21Pinto/MovieStar_React_Project-.git
   cd MovieStar_React_Project-

2. **Create a `.env` file** in the root with:

   ```dotenv
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   TMDB_API_KEY=<your-tmdb-api-key>
   JWT_SECRET=<your-secret-key>
   ```

3. **Install dependencies**

   ```bash
   # In the project root (backend)
   npm install

   # In the client folder (frontend)
   cd client
   npm install
   ```

---

## 💻 Usage

1. **Start the backend server**

   ```bash
   npm run server
   ```

   By default it runs on `http://localhost:5000`.

2. **Start the React app**

   ```bash
   cd client
   npm start
   ```

   The frontend will open at `http://localhost:3000`.

3. **Sign up** for a new account, then **log in** to explore movies!

---

## ✅ Running Tests

This project uses **Jest** and **React Testing Library** for unit & integration tests.

```bash
# From the project root
npm test
```

---

## 📂 Project Structure

```
/
├── client/           # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/  # Watchlist / Auth contexts
│       ├── pages/
│       ├── styles/
│       └── App.js
├── controllers/      # Express route handlers
├── models/           # Mongoose schemas (User, Watchlist)
├── routes/           # Express routers (auth, movies)
├── middleware/       # Auth checks, error handlers
├── .env
└── server.js
```

---

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'feat: add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

Please follow the existing code style and include meaningful commit messages.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

**Carol Pinto**

* GitHub: [@Carol21Pinto](https://github.com/Carol21Pinto)
* Email: [carolpintopintopinto@gmail.com](mailto:carolpintopintopinto@gmail.com)

---

## 🙏 Acknowledgments

* [TMDb API](https://www.themoviedb.org/) for movie data
* [YouTube API](https://developers.google.com/youtube/) for trailers
* [Create React App](https://create-react-app.dev/) boilerplate

---
👥 Collaborators

Carol Pinto - [@Carol21Pinto](https://github.com/Carol21Pinto)

Rahul M - [@RahulMGatty](https://github.com/RahulMGatty)

Ashith Fernandes - [@spideyashith](https://github.com/spideyashith)


