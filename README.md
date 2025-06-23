# 🧪 Virtual Lab Manager

A comprehensive full-stack platform to manage programming practicals, project submissions, and course content in educational institutions.

## 🎯 Project Scope

Virtual Lab Manager is built to streamline the management of coding courses, practicals, and submissions with powerful features like:

👩‍🎓 Student Module: View and submit practicals, live code execution, track progress  
👩‍🏫 Faculty Module: Create and manage courses and practicals, evaluate submissions  
👨‍💼 HOD Module: Assign faculty, monitor activity, generate reports  
💻 Remote Judge Integration: Compile and run code remotely using Judge0 API  
🔐 Role-Based Login: Separate dashboards and functionality for each user type  
🌗 Dark Mode, animations, and interactive UI

## 💡 Technologies Used

Frontend  
React.js  
HTML5, CSS3, JavaScript  
Tailwind CSS / Custom CSS  
Axios, React Router DOM  
react-tsparticles for background animation

Backend  
Node.js, Express.js  
MySQL with Drizzle ORM  
Judge0 API for remote code execution

## ✅ Current Status

This repository currently includes:  
🔐 Login Page UI only — with role-based login (Student, Faculty, HOD), dark mode, show/hide password, and animated background.  

Backend and full dashboard integration are in progress.

## 📁 Folder Structure (Planned)

client → React frontend  
server → Node + Express backend  
database → SQL schema and seeders  

## 📦 Setup Instructions (Login Page Only)

cd client  
npm install  
npm start

Make sure to set the backend API URL in your axios calls.

## 🚀 Features of Login Page

🔐 Username/password input with emoji icons  
🧑‍🎓 Role selection (Student, Faculty, HOD)  
🌙 Toggle dark/light mode  
👁️ Show/hide password  
🪐 Particle animation background  

## 👥 Author

Chintamani Joshi (https://github.com/Chintamani26)

## 📄 License

MIT License – Free for personal and academic use.

