
# Product Management Application

**Product Management Application** is a single-page web app built with **React.js** and **Redux Toolkit** that demonstrates full CRUD functionality for products using a mock backend (JSON Server). This repository is designed as a practical exam / portfolio project to show state management, API integration, search & filter, and common product-management UX patterns.

---

## 🚀 Live Demo

<img src="https://github.com/SwapnilpatilTech/react-pr-exam/blob/2886d0f3ad3d3f26ad2c36f5d48dce453783b262/Recording%202025-09-30%20185123.gif" width="100%" />

`
## 🔍 Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Screenshots](#screenshots)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Install](#install)
  * [Running the App](#running-the-app)
* [API (JSON Server)](#api-json-server)
* [Usage](#usage)
* [Testing](#testing)
* [Deployment](#deployment)
* [Contribution](#contribution)
* [License](#license)
* [Contact](#contact)

---

## ✅ Features

* Create, Read, Update, Delete (CRUD) products
* Search products by title
* Filter products by category and price range
* Sort products (price ascending/descending, newest)
* Product detail view with image and description
* Form validation for add/edit product
* Pagination (if dataset grows)
* Responsive UI (mobile & desktop)

---

## 🧰 Tech Stack

* Frontend: **React.js** (Create React App or Vite)
* State Management: **Redux Toolkit**
* Mock Backend: **JSON Server**
* Styling: **CSS / Tailwind CSS / Bootstrap** (choose your preference)
* Tools: **Axios** (or Fetch API) for HTTP requests

---

## 🖼️ Screenshots
<img src="https://github.com/SwapnilpatilTech/react-pr-exam/blob/381897f42b935c176d74ae6c4073a9dd976d216f/Screenshot%202025-09-30%20184153.png" width="100%" />


* `screenshots/home.png` — Product list & search
* `screenshots/add-product.png` — Add product form
* `screenshots/edit-product.png` — Edit product flow

---

## 📁 Project Structure

```
product-management-app/
├── public/
│   ├── index.html
│   └── screenshots/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── products/
│   │       ├── productSlice.js
│   │       ├── ProductList.jsx
│   │       └── ProductForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProductDetail.jsx
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   └── index.js
├── db.json
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

* Node.js (v16 or later recommended)
* npm or yarn

### Install

1. Clone the repo:

```bash
git clone https://github.com/<your-username>/product-management-app.git
cd product-management-app
```

2. Install dependencies:

```bash
npm install
# or
# yarn install
```

### Running the App (React + JSON Server)

1. Start JSON Server (mock API):

```bash
# from project root
npx json-server --watch db.json --port 5000
```

2. In another terminal, start the React app:

```bash
npm start
# or
# yarn start
```

Open `http://localhost:3000` to view the app and `http://localhost:5000/products` for the mock API.

---

## 🔌 API (JSON Server)

**Sample endpoints** (assuming JSON Server runs at `http://localhost:5000`):

* `GET /products` — List all products
* `GET /products/:id` — Get product by id
* `POST /products` — Add a new product
* `PUT /products/:id` — Replace product
* `PATCH /products/:id` — Update product fields
* `DELETE /products/:id` — Delete product

**db.json** should contain an initial seed like:

```json
{
  "products": [
    {
      "id": 1,
      "title": "Wireless Earbuds",
      "category": "Electronics",
      "price": 2999,
      "stock": 50,
      "description": "Compact wireless earbuds with noise isolation",
      "image": "/public/screenshots/earbuds.jpg"
    }
  ]
}
```

---

## 🧭 Usage

* Use the **Add Product** button to create a new product.
* Click a product row/card to view details and perform Edit/Delete.
* Use the search bar to quickly find products by title.
* Use category filters and sorting controls to refine results.

---

## ✅ Testing

* Manual: Verify CRUD flows with the UI and check JSON Server endpoints.
* Automated (optional): Add unit tests with Jest + React Testing Library for components and Redux slice behavior.

---

## 🚀 Deployment

1. Build the app:
