# 🔍 Git Searcher

A sleek, responsive, modern web application built with **React** and **Vite** that interfaces with the official GitHub REST API to look up user profiles and display live repository metrics.

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 🚀 Features

- **Live Data Fetching:** Utilizes JavaScript's asynchronous `fetch` mechanisms with `async/await` to pull up-to-date data from the GitHub API.
- **Dynamic Repository Rendering:** Maps through the user's project array to display relevant metrics like fork counts and stargazers dynamically.
- **System Theme Adaptation:** Automatically shifts visual style based on user preference using native `@media (prefers-color-scheme)` rules.
- **Mobile Responsive Layout:** Fully tailored via modern CSS Flexbox, CSS Grid, and media query breakpoints to function flawlessly on smartphones, tablets, and desktop displays.
- **Clean Component Architecture:** Built using modular, decoupled React presentational and container components (`SearchBar`, `ProfileCard`, `RepoList`).

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Framework:** React (via Vite bundling toolchain)
- **Icons:** [Lucide React](https://lucide.dev/) for precise, scalable vector iconography
- **Styling:** Vanilla CSS with custom property token definitions (`:root`)
- **Deployment Platform:** Vercel

---

## 📦 Local Installation & Setup

To get a local development instance of this app running on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/upsilonvibes/Git-Searcher-App.git](https://github.com/upsilonvibes/Git-Searcher-App.git)

2. **Navigate to the project directory:**

  ```Bash
cd Git-Searcher-App

3. **Install the dependencies:**

   ```Bash
npm install

4. **Boot up the local development server:**

   ```Bash
npm run dev


5. Open your local browser and point it to `http://localhost:5173` to test the application!