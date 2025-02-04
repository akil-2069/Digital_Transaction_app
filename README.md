# Digital Transaction Website (In-progress)

## Overview
This project is a **Digital Transaction Website** built using **MERN Stack** (MongoDB, Express.js, React.js, and Node.js). It provides secure and efficient digital transactions with **JWT authentication**, input validation using **Zod**, and various middlewares to enhance security and functionality.

## Features
- **User Authentication**: Secure login and signup using **JWT (JSON Web Tokens)**
- **Transaction Management**: Perform transactions securely with real-time updates
- **Data Validation**: Input validation using **Zod**
- **Middleware Support**: Implements middlewares for security, logging, and error handling
- **CORS Enabled**: Ensures proper cross-origin resource sharing
- **Responsive UI**: Built with **React.js**, styled using **Tailwind CSS**
- **RESTful API**: Created using **Node.js & Express.js** for smooth backend operations
- **MongoDB Integration**: NoSQL database for managing users and transactions

## Tech Stack
### Frontend
- **HTML, CSS, JavaScript**
- **React.js** (for UI components and state management)
- **Tailwind CSS** (for styling and responsiveness)

### Backend
- **Node.js** (runtime environment)
- **Express.js** (backend framework)
- **MongoDB** (database)
- **JWT** (authentication)
- **Zod** (schema validation)
- **CORS** (cross-origin handling)
- **Middlewares** (for request handling and security)

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/digital-transaction.git
   cd digital-transaction
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Setup environment variables:**
   Create a `.env` file and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the backend server:**
   ```sh
   npm run server
   ```

5. **Run the frontend:**
   ```sh
   cd client
   npm install
   npm start
   ```

## API Endpoints
| Method | Endpoint          | Description          |
|--------|------------------|----------------------|
| POST   | /api/auth/signup | User registration   |
| POST   | /api/auth/login  | User login          |
| GET    | /api/user        | Fetch user details  |
| POST   | /api/transaction | Create a transaction |
| GET    | /api/transaction | Fetch transactions  |

## License
This project is open-source and available under the **MIT License**.

## Contact
For any inquiries, feel free to reach out:
- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)


