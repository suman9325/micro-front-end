# React Micro Frontend Architecture (Vite + Module Federation)

## 📌 Project Overview

This project demonstrates a **Micro Frontend architecture** built using **React and Vite Module Federation**.
The application is split into multiple independent frontend applications that can be developed, deployed, and scaled separately.

Micro Frontends help large applications become **more scalable, maintainable, and team-friendly** by dividing them into smaller independent modules.

---

## 🚀 Tech Stack

* **React.js**
* **Vite**
* **Module Federation**
* **JavaScript / JSX**
* **CSS / SCSS**

---

## 🏗 Architecture

This project consists of the following applications:

### 1️⃣ Host Application

The host app acts as the **main container** that loads remote applications dynamically.

Responsibilities:

* Loads remote micro frontends
* Manages routing
* Integrates shared dependencies

### 2️⃣ Remote Applications

Remote apps expose components that can be consumed by the host.

Example:

* Authentication Module
* Dashboard Module
* UI Components

Each remote application runs independently and exposes modules using **Module Federation**.

---

## 📂 Project Structure

```
micro-frontend/
│
├── host-app/
│   ├── src/
│   ├── vite.config.js
│   └── package.json
│
├── auth-remote/
│   ├── src/
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/your-username/micro-frontend.git
```

Go into the project folder:

```
cd micro-frontend
```

Install dependencies for each application:

```
npm install
```

---

## ▶️ Running the Applications

Start the **remote application first**:

```
cd auth-remote
npm run dev
```

Then start the **host application**:

```
cd host-app
npm run dev
```

Host will load remote modules dynamically.

---

## 🔗 Example Remote Configuration (Vite)

Example configuration for Module Federation:

```
federation({
  name: "host",
  remotes: {
    auth: "http://localhost:5001/assets/remoteEntry.js"
  },
  shared: ["react", "react-dom"]
})
```

---

## 🌟 Key Features

* Micro Frontend Architecture
* Independent Deployment
* Dynamic Module Loading
* Shared Dependencies
* Faster Build using Vite
* Scalable Frontend Structure

---

## 📚 Learning Purpose

This project was created to explore:

* Micro Frontend Architecture
* Module Federation with Vite
* Scalable React application structure
* Modern frontend tooling

---

## 👨‍💻 Author

**M D**

Frontend Developer
Tech Stack: React, Angular, JavaScript, HTML, CSS

---

## ⭐ Support

If you found this project useful, please consider giving it a **⭐ on GitHub**.
