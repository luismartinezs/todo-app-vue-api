require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const knex = require('knex')
const morgan = require('morgan') // Logging

const toDo = require('./controller/to-do')

// const user = process.env.DB_USER
// const password = process.env.DB_PASSWORD
// const host = process.env.DB_HOST
// const port = process.env.DB_PORT
// const database = process.env.DB_DATABASE

// const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`

const db = knex({
  client: 'pg',
  connection: process.env.DB_URI
})

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("IT'S WORKING")
})

app.get('/api/v1/todo', (req, res) => {
  toDo.getToDos(req, res, db)
})

app.post('/api/v1/todo', (req, res) => {
  toDo.createToDo(req, res, db)
})

app.put('/api/v1/todo/:id', (req, res) => {
  toDo.updateToDo(req, res, db)
})

app.delete('/api/v1/todo/:id', (req, res) => {
  toDo.deleteToDo(req, res, db)
})

app.listen(3000, () => {
  console.log('app is running on port 3000')
})
