# Product Management System

A modern Product Management System built using **React**, **Vite**, **Tailwind CSS**, and **Directus CMS**. This application allows administrators to manage products with image uploads and provides a clean interface for viewing product details.

## Features

- Home page with responsive UI
- View all products
- Product details page
- Add new products
- Upload product images
- Form validation using Formik & Yup
- Duplicate product validation
- Toast notifications
- Responsive design
- Directus CMS integration

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Formik
- Yup
- React Hot Toast

### Backend / CMS

- Directus CMS
- SQLite Database (Default Directus Database)
- Directus File Storage

## Folder Structure

```
src
│── components
│── pages
│── services
│── validation
│── assets
│── App.jsx
│── main.jsx
```

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/product-management-system.git
```

Navigate into the project

```bash
cd product-management-system
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

## Environment

Configure the Directus API URL inside:

```javascript
src / services / api.js;
```

Example

```javascript
const api = axios.create({
  baseURL: "https://your-directus-instance.com",
});
```

## Screens

- Home Page
- Product Listing
- Product Details
- Add Product
- Responsive Mobile View

## Future Improvements

- Product Search
- Edit Product
- Delete Product
- Dashboard
- User Authentication
- Role-based Access
- Pagination
- Product Categories
- Analytics Dashboard

## Author

**Bharathikannan (BK)**

GitHub: https://github.com/your-github-username

LinkedIn: https://linkedin.com/in/your-linkedin

## License

This project is developed for learning and demonstration purposes.
