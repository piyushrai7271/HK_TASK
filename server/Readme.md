# 📝 Task Management System

A simple web-based Task Management application built using **Node.js**, **Express**, **MySQL**, **Objection.js**, and **Handlebars (hbs)**. It allows you to manage users, assign tasks, and export task data to Excel.

---

## 🚀 Features

- ✅ Add Users (Name, Email, Mobile)
- ✅ Add Tasks with status (`Pending` / `Done`)
- ✅ View Tasks assigned to a specific user
- ✅ Export Users & Tasks to Excel
- ✅ Form validation (client-side)
- ✅ Neat, responsive UI with simple styling

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: Handlebars (hbs)
- **Database**: MySQL
- **ORM**: Objection.js + Knex
- **Excel Export**: ExcelJS
- **Frontend**: HTML/CSS (vanilla)

---

## 📁 Project Structure

project-root/
│
├── models/ # Objection.js models (User, Task)
├── routes/ # Route definitions
├── controllers/ # Request handlers (user + task)
├── views/ # HBS view templates
│ ├── home.hbs
│ ├── userForm.hbs
│ ├── taskForm.hbs
│ ├── viewUsers.hbs
│ └── userTasks.hbs
│
├── public/ # Static files (CSS, JS)
│ └── js/
│ ├── validateUserForm.js
│ └── validateTaskForm.js
│
├── knexfile.js # Knex DB config
├── app.js # Express server setup
├── package.json
└── README.md # This file



---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager


npm install

### configure MySQL database

CREATE DATABASE task_management;

create table

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  mobile VARCHAR(15)
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  task_name VARCHAR(255),
  task_status ENUM('Pending', 'Done'),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

#Start server
node app.js


📌 Usage
Home Page: /

Add User: /add-user

Add Task: /add-task

View All Users: /view-users

Export Excel: /export-excel

View User's Tasks: /users/:id/tasks


✅ Validation
Client-side JS validates:

=> User email and mobile format

=> Task name not empty


📦 Dependencies
     express

     mysql2

     knex

     objection

     express-handlebars

     exceljs

     body-parser


📄 License
     Name:-Piyush rai
     Email:- piyushrai7271@gmail.com
     gitHub:- https://github.com/piyushrai7271
     LinkedIn:-https://www.linkedin.com/in/piyush-rai-2322771a1/

