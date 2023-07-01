# Nagwa Task Back-end

The task is creating two endpoint one to get 10 random words from the array and the other to get the rank of the score sent in the body of the request

## endpoints

- /api/words - GET
- /api/rank - POST (body: {score: number})

## How to run the project

- clone the project using `git clone https://github.com/mohamed154salah/NagwaTask.git`
- cd into the back-task directory
- create a .env file and add the following variables
  - `PORT=8000`
- run `npm install` to install the dependencies
- run `npm test` to run the tests
- run `npm build` to build the project
- run `npm start` to start the project
- open `http://localhost:8000/api/words` to get the words
- open `http://localhost:8000/api/rank` to get the rank set the score in the body of the request

## used technologies

- Node.js
- Express.js
- Typescript
- Jest
- Supertest
- Lodash
