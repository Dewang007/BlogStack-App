# BlogStack - A Full-Stack Blog Application

## Overview

BlogStack is a modern, full-stack blog application built with React for the frontend and Node.js with Express for the backend. It allows users to create, read, update, and delete blog posts, as well as authenticate and manage their accounts.

## Features

- User authentication (sign up, sign in, sign out)
- Create, read, update, and delete blog posts
- Responsive design for mobile and desktop
- Rich text editing for blog posts
- Image upload for blog post covers
- User profiles

## Tech Stack

- Frontend:
  - React
  - Redux for state management
  - Material-UI for styling
  - Axios for API requests
- Backend:
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose as ODM
  - JWT for authentication

## Project Structure

```
Blog-App-Main/
├── client/ # Frontend React application
│ ├── public/
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── pages/ # Page components
│ │ ├── redux/ # Redux store, actions, and reducers
│ │ ├── services/ # API services
│ │ ├── utils/ # Utility functions
│ │ ├── App.js # Main App component
│ │ └── index.js # Entry point
│ └── package.json
├── server/ # Backend Node.js/Express application
│ ├── controllers/ # Request handlers
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── middleware/ # Custom middleware
│ ├── utils/ # Utility functions
│ ├── app.js # Express app setup
│ └── server.js # Entry point for the server
├── .gitignore
├── package.json
└── README.md # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:

```
git clone https://github.com/Dewang007/BlogStack-App.git
cd Blog-App-Main
```

2. Install server dependencies:

```
cd server
npm install
```

3. Install client dependencies:

```
cd ../client
npm install
```

4. Create a `.env` file in the server directory with the following content:

```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Running the Application

1. Start the server:

```
cd server
npm start
```

2. In a new terminal, start the client:

```
cd client
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- POST /api/auth/signup - Register a new user
- POST /api/auth/signin - Authenticate a user
- GET /api/blogs - Get all blogs
- GET /api/blogs/:id - Get a specific blog
- POST /api/blogs - Create a new blog (authenticated)
- PUT /api/blogs/:id - Update a blog (authenticated)
- DELETE /api/blogs/:id - Delete a blog (authenticated)

## License

This project is licensed under the MIT License.
