#  Movie Watchlist Manager

This is a simple React application built for **Week 2** of learning and practice core React concepts.

---

## 📌 Project Description

The Movie Watchlist Manager allows users to:

- Add movies with a title and genre
- Mark movies as watched or unwatched
- Filter movies (All / Watched / Unwatched)
- Delete movies from the list
- View live movie statistics

This project focuses on **React logic**, not CSS or design.

---

##  React Concepts Used

- useState (state management)
- Event handling (onChange, onClick, onSubmit)
- Lists and keys using `.map()`
- Conditional rendering
- Derived state (calculated during render)

---

##  Project Structure

src/
├── components/
│ └── MovieItem.jsx
├── App.jsx
├── main.jsx
└── index.css

---

##  Movie Data Model

Each movie object looks like this:

```js
{
  id: "unique-id",
  title: "Inception",
  genre: "Action",
  watched: false
}
How to Run the Project
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open your browser:

arduino
http://localhost:5173

(Assignment Requirements Met):

- Functional components only

- useState for state management

- Events handled correctly

- List rendering with unique keys

- Conditional rendering implemented

- Derived state calculated correctly

👩‍💻 Author

Farzana
Week 2 – React Assignment
