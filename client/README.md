#Meal On Time

Food delivery or takeaway with React.

### Tech Stack

- Node.js
- Express.js
- MongoDB
- nodemon
- React

## Prepare the environment

1. Create a new MongoDB database with cards collection.
2. Clone project in vscode:

## Project Installation

1. Install nodemon globally: 'npm i -g nodemon' and update 'package.json' accordingly.
2. Server:
   - Add configuration file: 'config/dev.js' containing the database connection details.
   - Install dependencies for the Server:
     'cd server'
     'npm install'
   - Install dependencies for React client:
     cd client
     npm install

## Run The App

1. Run the server - cd server, then:

- Windows: set DEBUG=meal-on-time:\*; & npm start
  or: DEBUG=meal-on-time:\* npm start
- MacOS/Linux: DEBUG=meal-on-time:\* npm start

2. Run the client:
   cd client
   npm start
