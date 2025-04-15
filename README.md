Finance Tracker App - Backend
This repository contains the backend part of the Finance Tracker App, a full-stack application to manage personal finance, track income and expenses, and manage budgets. This backend is built with Node.js and Express.js, and uses MongoDB for data storage.

Features
Income and Expense Tracking: APIs to create, fetch, update, and delete income and expense records.

Budget Management: APIs to set and retrieve the user's budget.

Authentication: Secure authentication using JWT (JSON Web Tokens) for users.

Error Handling: Centralized error handling middleware for better error management and logging.

Full-stack Integration: Ready to be integrated with the frontend React app.

Tech Stack
Node.js: JavaScript runtime for backend development.

Express.js: Web framework for building REST APIs.

MongoDB: NoSQL database for storing user data, income, expense, and budget records.

JWT: For secure user authentication.

dotenv: For managing environment variables.

Mongoose: ODM (Object Data Modeling) library for MongoDB.

Project Structure
The project is organized as follows:

bash
Copy
Edit
/backend
  ├── /config           # Configuration files for database and middleware
  │   └── db.js         # MongoDB database connection configuration
  │   └── auth.js       # JWT authentication middleware
  │
  ├── /middlewares      # Error handlers and validation middlewares
  │   └── errorHandler.js # Centralized error handler
  │
  ├── /models           # Mongoose models (Income, Expense, User, etc.)
  │   └── incomeModel.js   # Income record schema
  │   └── expenseModel.js  # Expense record schema
  │   └── userModel.js     # User schema (for authentication)
  │
  ├── /routers          # API route definitions
  │   └── incomeRoutes.js  # Routes for income operations
  │   └── expenseRoutes.js # Routes for expense operations
  │   └── budgetRoutes.js  # Routes for budget operations
  │   └── authRoutes.js    # Routes for authentication
  │
  ├── /utils            # Utility functions
  │   └── validation.js   # Input validation utilities
  │   └── logger.js       # Logger for API requests
  │
  ├── server.js         # Backend server entry point
  ├── .env              # Environment variables (including MongoDB URI)
  ├── .gitignore        # Ignored files (node_modules, logs, etc.)
  ├── package.json      # Backend dependencies and scripts
  └── yarn.lock         # Dependency lock file
Key Directories and Files:
/config/db.js: Contains the MongoDB connection configuration using Mongoose.

/models: Contains the schema definitions for Income, Expense, and User.

incomeModel.js: Schema and Mongoose methods for income.

expenseModel.js: Schema and Mongoose methods for expenses.

userModel.js: Schema for the user (for authentication).

/routers: Contains route definitions for income, expenses, budget, and user authentication.

incomeRoutes.js: API routes for income-related operations (POST, GET, PUT, DELETE).

expenseRoutes.js: API routes for expense-related operations.

budgetRoutes.js: API routes for managing the budget.

authRoutes.js: Authentication routes (login, registration).

/middlewares/errorHandler.js: Global error handler that catches and returns proper error messages.

server.js: The entry point of the app where the server and routes are set up.

Setup and Installation
1. Clone the Repository
First, clone the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/yourusername/finance-tracker-app.git
cd finance-tracker-app/backend
2. Install Dependencies
Install the required dependencies for the backend:

bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following environment variables (you can base it on .env-sample):

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key
MONGO_URI: The connection string for your MongoDB database.

JWT_SECRET: A secret key for signing JWT tokens.

4. Run the Backend Server
Start the backend server in development mode:

bash
Copy
Edit
npm run dev
This will start the backend on http://localhost:5000.

5. API Endpoints
Here are the main API routes available:

User Authentication
POST /api/auth/register: Register a new user.

POST /api/auth/login: Login and receive a JWT token.

Income
GET /api/income: Fetch all income records for the authenticated user.

POST /api/income: Add a new income record.

PUT /api/income/:id: Update an existing income record.

DELETE /api/income/:id: Delete an income record.

Expense
GET /api/expense: Fetch all expense records for the authenticated user.

POST /api/expense: Add a new expense record.

PUT /api/expense/:id: Update an existing expense record.

DELETE /api/expense/:id: Delete an expense record.

Budget
GET /api/budget: Get the current user's budget.

POST /api/budget: Set or update the user's budget.

6. Error Handling
If any error occurs (e.g., invalid input or authentication failure), the API will return a detailed error message in the following format:

json
Copy
Edit
{
  "error": "Error message here"
}
Deployment
This backend API can be deployed using a service like Heroku or DigitalOcean. The frontend can be deployed separately on Vercel, and the backend should be connected via the provided MONGO_URI and JWT_SECRET.

Contributions
Feel free to fork this repository, open issues, and submit pull requests. Contributions are always welcome!
