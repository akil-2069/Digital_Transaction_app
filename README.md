# Digital Transaction Website

## Overview
This project is a Digital Transaction Website built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). It provides secure and efficient digital transactions with JWT authentication, input validation using Zod, and various middlewares to enhance security and functionality.

## Features
- **User Authentication**: Secure login and signup using JWT (JSON Web Tokens)
- **Transaction Management**: Perform transactions securely with real-time updates
- **Data Validation**: Input validation using Zod
- **Middleware Support**: Implements middlewares for security, logging, and error handling
- **CORS Enabled**: Ensures proper cross-origin resource sharing
- **Responsive UI**: Built with React.js, styled using Tailwind CSS
- **RESTful API**: Created using Node.js & Express.js for smooth backend operations
- **MongoDB Integration**: NoSQL database for managing users and transactions
- **Transaction History Visualization**: Added a bar graph feature to visually represent transaction history

## Tech Stack

### Frontend
- HTML, CSS, JavaScript
- React.js (for UI components and state management)
- Tailwind CSS (for styling and responsiveness)

### Backend
- Node.js (runtime environment)
- Express.js (backend framework)
- MongoDB (database)
- JWT (authentication)
- Zod (schema validation)
- CORS (cross-origin handling)
- Middlewares (for request handling and security)

## Installation

### Clone the repository:
```sh
git clone https://github.com/your-username/digital-transaction.git
cd digital-transaction
```

### Install dependencies:
```sh
npm install
```

### Setup environment variables:
Create a `.env` file and add the following:
```sh
PORT=3000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the backend server:
```sh
cd backend/
node index.js
```

### Run the frontend:
```sh
cd frontend/
npm install
npm run dev
```

### Accessing the Website
Once the program is running, navigate to your browser and add `/signup` or `/signin` to the URL to open the initial page of the website.

## License
This project is open-source and available under the MIT License.

## Contact
For any inquiries, feel free to reach out:

- **Email**: akilan.m2023@vitstudent.ac.in
- **GitHub**: akil-2069
