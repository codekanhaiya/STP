# 📊 Stock Trading Platform — Zerodha Inspired
A modern, responsive investment dashboard and landing site built to help users visualize, manage, and interact with their stock portfolio. Designed with both UI/UX finesse and developer clarity in mind.

---

## ✨ Features

### 💼 Dashboard (Client)

1. View current holdings, P&L, and daily change

2. Sort stocks by instrument name or value

3. Graphical visualization using Bar & Doughnut charts

4. Responsive layout using Styled Components

5. Highlight max & min stock values at the top bar

### 🌐 Landing Page (Frontend)

1. Elegant homepage, product & pricing info

2. Reusable components: Navbar, Footer, NotFound

3. React routing for About, Support, and Open Account

### ⚙ Backend (Express + MongoDB)

1. MongoDB models and schemas for user data and stock records

2. Future-ready for login/auth and real-time data integration

---
## 🛠 Tech Stack

| Layer     | Tech Stack                                |
| --------- | ----------------------------------------- |
| Frontend  | React.js, Styled Components, React Router |
| Dashboard | React + Chart.js (via `react-chartjs-2`)  |
| Backend   | Node.js, Express.js, MongoDB (Mongoose)   |
| Styling   | Styled-Components, Media Queries          |
| Tools     | Git, VSCode, NPM, GitHub                  |


---
## 🗂 Project Structure

```
STP/
|
|
├── backend/                   # Node.js + Express API
│   ├── models/
│   ├── schemas/
│   └── index.js

├── dashboard/                 # Stock dashboard
│   ├── public/
│   └── src/
│       └── client/
│           ├── partition/
│           │   ├── common/         # Static data: holdings, watchlist
│           │   ├── dashComponent/  # Charts, tables, summaries
│           │   └── topComponent/   # TopBar, Menu
│           ├── Dashboard.js
│           ├── Home.js
│           └── TopBar.js

├── frontend/                  # Landing website
│   └── src/
│       └── landing_page/
│           ├── about/
│           ├── account/
│           ├── home/
│           ├── pricing/
│           ├── products/
│           ├── support/
│           ├── Footer.js
│           ├── Navbar.js
│           ├── NotFound.js
│           └── OpenAccount.js
│
├── .gitignore
├── cmd.txt
└── README.md
``` 
---

## 🧑‍💻 Getting Started

### 1. Clone the Repository
```
git clone https://github.com/your-username/stock-dashboard.git

```

### 2. Backend Setup
```
cd backend
npm install
node index.js

```

### 3. Dashboard Client Setup
```
cd dashboard
npm install
npm start

```

### 4. Landing Page Setup
```
cd frontend
npm install
npm start

```

---
## 🙌 Contributing
### We welcome all contributions. To get started:

    1. Fork this repository
    2. Create your branch: git checkout -b feature/your-feature-name
    3. Commit your changes: git commit -m "Added new feature"
    4. Push to the branch: git push origin feature/your-feature-name
    5. Open a pull request


---

## 📄 License

This project is licensed for educational use. For commercial or production-level deployment, please contact the author.

---

## 📬 Contact
#### Made with 💚 by Kanhaiya Gupta
##### 📧 Email: kanhaiyaguptaksg@gmail.com
##### [🌐 Visit My Portfolio](http://officialkanha.epizy.com/)

