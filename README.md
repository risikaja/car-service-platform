#  Car Service Cloud Platform

A full-stack cloud-based platform for managing car services, spare parts inventory, online orders, customer discounts, and shipping cost calculations.

Developed as a course project for **Architecture and Systems Engineering**.

---

## Overview

Car Service Cloud Platform is a modern web application that enables automotive businesses to manage spare parts, customer orders, and service operations through a centralized cloud-ready system.

The platform provides:

* User registration and authentication
* Spare parts management
* Shopping cart and checkout system
* Automatic discount calculations
* Shipping cost calculation based on distance
* Order management
* Administrative dashboard
* RESTful API integration
<img width="1900" height="717" alt="Screenshot 2026-05-22 235146" src="https://github.com/user-attachments/assets/7667c4e1-19d8-4263-8d39-98bc32636c02" />

---

## System Architecture

The application follows a **three-tier architecture**:

### Frontend Layer

* React.js
* React Router
* Axios
* Responsive UI Design

### Backend Layer

* Node.js
* Express.js
* REST API Architecture
* Business Logic Layer

### Database Layer

* MySQL Relational Database

### Security Layer

* JWT Authentication
* bcrypt Password Hashing
* Role-Based Authorization

---

## Features

### Authentication & Authorization

* User Registration
* User Login
* JWT Token Generation
* Password Hashing with bcrypt
* Role-Based Access Control

### Spare Parts Management

* Add Parts
* Delete Parts
* Update Inventory
* Manage Prices
* Stock Monitoring

### Shopping Cart

* Add to Cart
* Remove from Cart
* Quantity Management
* Discount Calculation

### Checkout System

* Order Creation
* Shipping Cost Calculation
* Discount Application
* Total Price Calculation

### Order Management

* View Orders
* Update Order Status
* Track Deliveries

### Admin Dashboard

* Inventory Management
* Order Management
* CRUD Operations
* Customer Discount Management

---

## Database Design

### Main Tables

#### Users

| Field    | Description       |
| -------- | ----------------- |
| user_id  | Primary Key       |
| name     | User Name         |
| email    | Email Address     |
| password | Hashed Password   |
| role     | User Role         |
| discount | Customer Discount |

#### Parts

| Field   | Description     |
| ------- | --------------- |
| part_id | Primary Key     |
| name    | Part Name       |
| brand   | Brand           |
| model   | Vehicle Model   |
| price   | Price           |
| stock   | Available Stock |

#### Orders

| Field         | Description   |
| ------------- | ------------- |
| order_id      | Primary Key   |
| user_id       | Foreign Key   |
| total_price   | Total Price   |
| shipping_cost | Shipping Cost |
| status        | Order Status  |

#### Order_Items

| Field    | Description |
| -------- | ----------- |
| item_id  | Primary Key |
| order_id | Foreign Key |
| part_id  | Foreign Key |
| quantity | Quantity    |

#### Services

| Field        | Description         |
| ------------ | ------------------- |
| service_id   | Primary Key         |
| user_id      | Foreign Key         |
| description  | Service Description |
| service_date | Service Date        |

<img width="1175" height="822" alt="Screenshot 2026-05-23 000351" src="https://github.com/user-attachments/assets/84f2ad82-eace-4581-977c-cac87838a1dc" />

---

## REST API Endpoints

### Authentication

```http
POST /auth/register
POST /auth/login
```

### Parts

```http
GET    /parts
POST   /parts
DELETE /parts/:id
```

### Orders

```http
GET  /orders
POST /orders
PUT  /orders/:id
```

### Shipping

```http
GET /shipping/:km
```
<img width="1913" height="916" alt="Screenshot 2026-05-23 000457" src="https://github.com/user-attachments/assets/8c8a8e05-87cc-43da-863c-20cc25f5b3bf" />

---

## Security Features

* JWT Authentication
* Password Hashing with bcrypt
* Protected Routes
* Role-Based Authorization
* Environment Variables (.env)
* Secure API Communication

---

## Responsive Design

The platform is fully responsive and optimized for:

* Desktop Devices
* Tablets
* Mobile Devices

UI Features:

* Modern Navbar
* Responsive Layout
* Floating Shopping Cart
* Interactive Cards
* Smooth User Experience

---

## Testing

### Backend Testing

* API Endpoint Testing
* Authentication Testing
* Database Testing

### Frontend Testing

* Navigation Testing
* Responsive Design Testing
* Cart Functionality Testing

### Security Testing

* Invalid Login Scenarios
* Unauthorized Access Testing

---

## Technologies Used

### Frontend

* React.js
* React Router
* Axios
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Authentication

* JWT
* bcrypt

### Development Tools

* Git
* GitHub
* Postman

---

## Future Improvements

* Online Deployment (AWS/Azure)
* Payment Gateway Integration
* Email Notifications
* Product Image Uploads
* Analytics Dashboard
* Advanced Reporting

---

## Author

* Riza Kaja


Course Project – Architecture and Systems Engineering
European University of Tirana
