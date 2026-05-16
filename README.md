# 🎓 Exam Hall Seat Allocation System

A full-stack web application that automates the process of allocating students to exam hall seats. The system reduces manual effort, minimizes allocation errors, and dynamically updates seat assignments.

## 🚀 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MySQL

---

## ✨ Features

- Add Student Records
- Add Exam Hall Details
- Automatic Seat Allocation
- Manual Seat Reallocation
- Dynamic Result Table
- Capacity Validation
- Auto Reallocation on Data Change
- Dashboard Navigation
- Responsive and Modern UI

---

## 📌 Project Workflow

Dashboard  
⬇  
Manage Students  
⬇  
Manage Halls  
⬇  
Automatic Seat Allocation  
⬇  
View Final Results  

---

## ⚙️ Algorithm Used

1. Students are sorted by roll number.
2. Exam halls are traversed row-wise.
3. Seat numbers are generated dynamically (`A1`, `A2`, `B1`, `B2`...).
4. Seats are assigned sequentially.
5. Allocation data is stored in MySQL.

---

## 🗄 Database Design

### Students Table
- student_id
- name
- roll_no
- branch
- semester

### Exam Halls Table
- hall_id
- room_no
- rows_count
- cols_count
- capacity

### Allocations Table
- allocation_id
- student_id
- hall_id
- seat_no

---

## 🖥 Installation Steps

Clone repository:

```bash
git clone YOUR_REPOSITORY_LINK
```

Go into backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
npm run dev
```

Create MySQL database:

```sql
CREATE DATABASE seatallocation;
```

Run SQL table scripts and update:

```js
backend/db.js
```

with your MySQL credentials.

---

## 📷 Screenshots

Add:
- Dashboard Screenshot
- Student Page Screenshot
- Hall Page Screenshot
- Result Page Screenshot

---

## 🔮 Future Enhancements

- Login Authentication
- PDF Export
- Excel Upload
- Branch-wise Smart Allocation
- Seat Map Visualization

---

## 👨‍💻 Role

Full Stack Developer
