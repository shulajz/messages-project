# Messages API

## Architecture

This project is a **Messages API** built with **Node.js** and **Express**. It allows users to perform CRUD operations (Create, Read, Update, Delete) on messages. Each message is evaluated to check if it's a palindrome, and this information is stored in a mock database (an in-memory array).

The system uses:

- **Node.js** for the backend.
- **Express** for the web framework.
- **uuid** for generating unique message IDs.
- **Jest** for testing.
- **GitHub Actions** for continuous integration and automated testing.

## How to Build, Deploy, Test, and Access the App

### Prerequisites

- **Node.js** and **npm** installed. You can download them from [Node.js official site](https://nodejs.org/).

### 1. Clone the Repository

```bash
git clone https://github.com/shulajz/messages-project.git
cd messages-api
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Run the Application

To start the API, run:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

### 4. Run Tests

To run the automated tests locally, use:

```bash
npm test
```

Tests will also run automatically in **GitHub Actions** whenever code is pushed or a pull request is opened.

## Accessing the API

### Base URL

```
http://localhost:3000/messages
```

### Endpoints

#### 1. **GET /messages**

Retrieve all stored messages.

**Response:**

- **Status Code:** 200
- **Response Body:**

```json
[
  {
    "id": "1a2b3c4d",
    "message": "racecar",
    "is_palindrome": true
  }
]
```

#### 2. **GET /messages/:id**

Retrieve a message by its ID.

**Response:**

- **Status Code:** 200
- **Response Body:**

```json
{
  "id": "1a2b3c4d",
  "message": "racecar",
  "is_palindrome": true
}
```

#### 3. **POST /messages**

Create a new message.

**Request Body:**

```json
{
  "message": "hello"
}
```

**Response:**

- **Status Code:** 201
- **Response Body:**

```json
{
  "message": "Message added successfully",
  "data": {
    "id": "new-uuid",
    "message": "hello",
    "is_palindrome": false
  }
}
```

#### 4. **PUT /messages/:id**

Update an existing message.

**Request Body:**

```json
{
  "message": "madam"
}
```

**Response:**

- **Status Code:** 200
- **Response Body:**

```json
{
  "message": "Message updated successfully",
  "data": {
    "id": "existing-id",
    "message": "madam",
    "is_palindrome": true
  }
}
```

#### 5. **DELETE /messages/:id**

Delete a message by ID.

**Response:**

- **Status Code:** 200
- **Response Body:**

```json
{
  "message": "Message deleted successfully"
}
```

### Error Handling

- **404 Not Found:** When a message ID does not exist.
- **400 Bad Request:** When the request body is invalid.

## Continuous Integration (CI/CD)

We use **GitHub Actions** to run tests automatically on every push or pull request to the `main` branch.

### GitHub Actions Configuration

Whenever you push code or open a pull request, the tests will run automatically. Check the **Actions** tab in your GitHub repository to view the results.
