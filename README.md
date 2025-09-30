📘 React JS Practical Exam – Product Management Application

This is a Product Management Application built using React JS with Redux Toolkit and JSON Server as a mock backend.

The app demonstrates CRUD operations, state management with Redux, and search & filter functionality.

🚀 Features

✅ Backend (JSON Server) – Mock API with products resource
✅ Redux Toolkit – Global state management
✅ CRUD Functionality – Add, Edit, Delete products with live API updates
✅ Search & Filter – Search by title + Filter by category
✅ Clean UI/UX – Minimal but clear design
✅ Proper Folder Structure – Components, Redux slices, and Pages separated

🏗️ Tech Stack

React JS

Redux Toolkit

JSON Server

Axios / Fetch API

CSS / Bootstrap (basic styling)



The application allows users to:

Add, edit, and delete products dynamically.

Manage product data through a mock REST API.

Search products by title and filter them by category.


product-management-app/
│── public/
│── src/
│   ├── components/
│   │   ├── ProductForm.jsx      # Add / Edit form
│   │   ├── ProductList.jsx      # Displays all products
│   │   ├── SearchFilter.jsx     # Search bar + category filter
│   │
│   ├── pages/
│   │   ├── Home.jsx             # Main page with product list
│   │
│   ├── redux/
│   │   ├── store.js             # Redux store setup
│   │   ├── productSlice.js      # Redux slice with CRUD reducers
│   │
│   ├── App.js
│   ├── index.js
│
├── db.json                      # JSON Server mock database
├── package.json
└── README.md


Maintain state globally with Redux Toolkit for scalability.

The project follows a clean folder structure, separating components, Redux logic, and pages, ensuring readability and reusability. With a minimal UI, it provides a practical example of how to build a real-world product management system in React.
