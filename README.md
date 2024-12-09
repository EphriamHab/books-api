# Books API

A RESTful API for managing books, with role-based authentication and authorization. This API allows users to perform CRUD operations on books, mark books as favorites, and get random book recommendations.

## Features
- **User Authentication** (Signup and Login)
- **Role-Based Access Control (RBAC)** (Admin and User roles)
- **Create** a new book
- **Read** all books or a specific book
- **Update** book details
- **Delete** a book
- **Mark/Unmark as Favorite** a book
- **Get Recommendations** for a random book

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/books-api.git
   cd books-api

2. Install dependencies:
   ```bash
   npm install 

3. Start the development server:
   ```bash
   npm start

## API Endpoints
### Base URL
  - https://books-api-self.vercel.app/

## Authentication API

### **Sign Up**
- **POST** `/auth/signup`
- **Request Body:**
  ```json
  {
    "name": "Ephrem Habtamu",
    "email": "ephrem@gamil.com",
    "password": "password123",
    "role": "admin"
  }
- **Response:**
  ```json
  {
  "name": "Eph Hab",
  "email": "eph@gmail.com",
  "password": "$2b$10$3Bru8DJBydJejIToJouEOKHzpOyHyo2yN5T6IS2CEtgwc1rkOefC",
  "role": "user",
  "_id": "6755f0c7ac3b0f2a84b6ba94",
  "__v": 0
  }
### **Login**
- **POST** `/auth/login`
- **Request Body:**
  ```json
  {
   "email":"eph@gmail.com",
   "password":"password123"
  }
- **Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTVmMGM3YWMzYjBmMmE4NGI2YmE5NCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMzNjg1NjMzLCJleHAiOjE3MzM2ODkyMzN9.5X-I9CDvyzne9KqhxMDYjk0LyJkJeKWaeHCilB8Xk90",
  "user": {
    "id": "6755f0c7ac3b0f2a84b6ba94",
    "role": "user"
  }
}
```

### Books API

| Method | Endpoint      | Description                   |
|--------|---------------|-------------------------------|
| GET    | `/books/all`      | Retrieve all books (Admin only)           |
| GET    | `/books/:id`  | Retrieve a specific book by ID|
| POST   | `/books`      | Create a new book(user only)             |
| PATCH  | `/books/:id`  | Update an existing book       |
| DELETE | `/books/:id`  | Delete a book by ID(admin only)           |

### Favorite

| Method | Endpoint               | Description                   |
|--------|------------------------|-------------------------------|
| PATCH  | `/books/:id/favorite`  | Mark or unmark a book as favorite |

### Recommendations

| Method | Endpoint                | Description                   |
|--------|-------------------------|-------------------------------|
| GET    | `/books/recommendation` | Get a random book recommendation |

## Role-Based Access Control (RBAC)

### Admin: Can perform the following actions:
- **Retrieve all books**: `GET /books/all`
- **Delete books**: `DELETE /books/:id`

### User: Can perform the following actions:
- **Create books**: `POST /books`
- **Retrieve a specific book**: `GET /books/:id`
- **Update books**: `PUT /books/:id`
- **Mark or unmark books as favorites**: `PATCH /books/:id/markFavorite`
- **Retrieve favorite books**: `GET /books/favorites`
- **Get book recommendations**: `GET /books/recommendation`

### Additional Notes:
- **Admin-Only Routes**:
  - `/books/all`: Accessible only by admins. Retrieves all books in the system.
  - `/books/:id`: Admins can delete specific books by their ID.
  
- **User-Accessible Routes**:
  - `/books`: Users can fetch books based on user-specific criteria or general books (if unrestricted).
  - `/books/favorites`: Users can view their favorite books.
  - `/books/recommendation`: Users can retrieve book recommendations tailored to their preferences.

### Shared Routes:
- `/books/:id`: Users and admins can view a specific book by its ID.
- `/books/:id`: Users and admins can update a book by its ID.
- `/books/:id/markFavorite`: Both users and admins can mark or unmark books as favorites.

### Authentication and Authorization:
- **Protect**: Routes are protected and require the user to be authenticated using JWT.
- **Authorize**: Routes have role-based access, allowing only users with specific roles (e.g., `user`, `admin`) to perform certain actions.

## Technologies Used
- Node.js: Backend runtime
- Express.js: Framework for building the REST API
- MongoDB: NoSQL database for storing books
- Mongoose: Object Data Modeling (ODM) library for MongoDB
- Nodemon: For hot-reloading during development
- JWT (JSON Web Token): For authentication
- bcrypt  for hashing password to  store in the database

## Deployment
This project is deployed online and can be accessed using the following link:  
[Live Server](https://books-api-self.vercel.app/)


## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Author
Developed by Ephrem Habtamu.
