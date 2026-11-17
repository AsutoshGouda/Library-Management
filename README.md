# Library Management System

A basic library management frontend built with React (Vite), HTML, CSS and JavaScript.

## Run it
```bash
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Login
Username: `admin`  Password: `admin123`  (front-end demo only, not real security)

## Features
- Login page
- Add / delete books
- Issue and return books
- Search and filter (All / Available / Issued)
- Data saved in the browser's localStorage

## Structure
```
src/
  main.jsx            entry point
  App.jsx             switches between Login and Dashboard
  data.js             sample books + localStorage helpers
  styles.css          all styling
  components/
    Login.jsx
    Dashboard.jsx
    AddBook.jsx
```
