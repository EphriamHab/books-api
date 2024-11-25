# Books API

A RESTful API for managing books. This API allows you to perform CRUD operations on books, mark books as favorites, and get random book recommendations.

## Features
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

### Books

| Method | Endpoint      | Description                   |
|--------|---------------|-------------------------------|
| GET    | `/books`      | Retrieve all books            |
| GET    | `/books/:id`  | Retrieve a specific book by ID|
| POST   | `/books`      | Create a new book             |
| PUT  | `/books/:id`  | Update an existing book       |
| DELETE | `/books/:id`  | Delete a book by ID           |

### Favorite

| Method | Endpoint               | Description                   |
|--------|------------------------|-------------------------------|
| PATCH  | `/books/:id/favorite`  | Mark or unmark a book as favorite |

### Recommendations

| Method | Endpoint                | Description                   |
|--------|-------------------------|-------------------------------|
| GET    | `/books/recommendation` | Get a random book recommendation |


## Technologies Used
- Node.js: Backend runtime
- Express.js: Framework for building the REST API
- MongoDB: NoSQL database for storing books
- Mongoose: Object Data Modeling (ODM) library for MongoDB
- Nodemon: For hot-reloading during development

## Deployment
This project is deployed online and can be accessed using the following link:  
[Live Server](https://bookapis.vercel.app/)


## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Author
Developed by Ephrem Habtamu.
