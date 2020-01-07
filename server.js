require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const knex = require('knex')
const cors = require('cors')
const morgan = require('morgan') // Logging

const toDo = require('./controller/to-do')

const db = knex({
  client: 'pg',
  connection: process.env.DB_URI
})

const app = express()

app.use(morgan('combined'))
app.use(cors())
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
