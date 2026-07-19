# Product Management System

A modern Product Management System built using **React**, **Directus**, and **PostgreSQL**. The application provides a custom React interface for managing products while Directus serves as the backend.

## Features

- Add Product
- Edit Product
- Delete Product
- View Products
- Product Details
- Search Products
- Image Upload
- Duplicate Product Validation
- SEO-Friendly Slug
- Responsive UI

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Formik
- Yup
- React Hot Toast

### Backend
- Directus CMS
- PostgreSQL
- Directus REST API

## Why Directus?

- Headless CMS
- Database-first approach
- Auto-generated REST APIs
- Built-in File Upload
- Built-in Admin Dashboard
- Faster development without writing CRUD APIs

## Project Structure

```
product-management-system/
│
├── frontend/
│
└── product-management-backend/
```

## Project Flow

```
React
   ↓
Axios
   ↓
Directus REST API
   ↓
PostgreSQL
```

## Main APIs Used

```
GET    /items/products
GET    /items/products/:id
POST   /items/products
PATCH  /items/products/:id
DELETE /items/products/:id
POST   /files
```

## Future Improvements

- User Authentication
- Product Categories
- Pagination
- Server-side Search
- Role-based Access Control

---

Built with ❤️ using React, Directus, and PostgreSQL.
