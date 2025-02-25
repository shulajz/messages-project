# **Messages API**

## **Architecture**

This API, built with **Node.js** and **Express**, allows CRUD operations on messages, storing them in an in-memory database. Each message is evaluated to determine whether it is a palindrome.

### **Key Technologies**

- **Node.js & Express** for backend
- **Jest** for testing
- **Docker** for containerization
- **AWS EC2** for deployment
- **AWS Route 53 & Namecheap** for domain management
- **GitHub Actions** for CI/CD

## **Build, Deploy, and Test**

### **1. Clone & Install Dependencies**

```sh
git clone https://github.com/shulajz/messages-project.git
cd messages-project
npm install
```

### **2. Run the API Locally**

To start the API locally, run:

```sh
npm start
```

The API will be available at `http://localhost:3000`.

You can test it using **Postman**, `curl`, or directly from the browser.

#### **Example API Calls Locally**

- **Get all messages:**
  ```sh
  curl -X GET http://localhost:3000/messages
  ```
- **Create a new message:**
  ```sh
  curl -X POST http://localhost:3000/messages -H "Content-Type: application/json" -d '{"message": "hello"}'
  ```

---

### **3. Run Tests**

```sh
npm test
```

Tests run locally and in **GitHub Actions** upon push.

---

## **Using the CLI**

### **1. Install CLI**

```sh
npm link
```

### **2. CLI Commands**

```sh
messages add "Hello"
messages list
messages get <id>
messages update <id> "Updated message"
messages delete <id>
```

---

## **Deployment**

This project runs in Docker on AWS EC2, with the domain managed through AWS Route 53 and Namecheap.

---

## **API Endpoints**

### **Base URL:** `https://www.messagesapi.com/messages`

#### **1. GET /messages** – Retrieve all messages

```sh
curl -X GET https://www.messagesapi.com/messages
```

#### **2. GET /messages/\*\***:id\*\* – Retrieve a message by ID

```sh
curl -X GET https://www.messagesapi.com/messages/<id>
```

#### **3. POST /messages** – Create a message

```sh
curl -X POST https://www.messagesapi.com/messages -H "Content-Type: application/json" -d '{"message": "hello"}'
```

#### **4. PUT /messages/\*\***:id\*\* – Update a message

```sh
curl -X PUT https://www.messagesapi.com/messages/<id> -H "Content-Type: application/json" -d '{"message": "updated"}'
```

#### **5. DELETE /messages/\*\***:id\*\* – Delete a message

```sh
curl -X DELETE https://www.messagesapi.com/messages/<id>
```

---

## **CI/CD**

**GitHub Actions** runs tests on each push or PR. Check the **Actions** tab in GitHub for results.
