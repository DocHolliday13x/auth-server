# LAB - Class 07

## Project: auth-server (supposed to be named bearer-auth)

### Author: Ryan Eastman

### Problem Domain

1. Lab 07:

   - We have been provided with starter code. We are tasked with going through the code, finding the bugs, and fixing them. We are also tasked with double checking features to the code base. So this lab is primarily debugging and testing for bearer auth.

### Links

- [GitHub Actions ci/cd](https://github.com/DocHolliday13x/auth-server/actions)
- [back-end server url](https://api-server.onrender.com/)

### Collaborators

- Ryan Gallaway - provided the starter code, debugged as a class

- Reece Renninger - collabed with

### Setup

#### `.env` requirements (where applicable)

- PORT=3001

#### How to initialize/run your application (where applicable)

- create repo on GitHub
- clone repo to local machine
- `npm init -y`
- `npm i`
- `nodemon` or `node index.js` to start server

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
- GET : `/` - specific route to hit
- GET : `/person` - expects a query string with a name property

#### Tests

- How do you run tests?
  <!-- test the express server -->
  - `nodemon`
  - open thunder client
  - enter url w/ query string
  - hit send

  <!-- test postgres database functionality locally -->
  - `psql`
  - `\c <database name>`
  - `\dt`
  - `\d <table name>`
  - `SELECT * FROM <table name>;`
  - `INSERT INTO <table name> (name, type) VALUES ('<name>', '<type>');`
  - `UPDATE <table name> SET name='<new name>', type='<new type>' WHERE id=<id>;`
  - `DELETE FROM <table name> WHERE id=<id>;`

  <!-- test the routes -->
  - confirm that the database is empty
  - `nodemon`
  - open thunder client
  - enter url w/ query string
  - hit send
  - test all RESTful CRUD routes

  - TDD if possible

- Any tests of note?
  - 200 status on a proper request
  - 500 status on a bad request
  - 404 status on a bad route
  - RESTful CRUD

- Describe any tests that you did not complete, skipped, etc

#### UML

![Lab 07 UML](/public/img/lab07UML.png)

#### Resources

- [Sequelize Docs](https://sequelize.org/docs/v6/core-concepts/assocs/)
