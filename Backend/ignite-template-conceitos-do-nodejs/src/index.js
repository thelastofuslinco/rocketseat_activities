const express = require('express')
const cors = require('cors')

const { v4: uuidv4 } = require('uuid')

const app = express()

app.use(cors())
app.use(express.json())

const users = []

function checksExistsUserAccount (request, response, next) {
  const { username } = request.headers

  const user = users.find(user => user.username === username)

  if (!user) {
    return response.status(404).json({ error: 'User not found!' })
  }

  request.user = user

  return next()
}

app.post('/users', (request, response) => {
  const { name, username } = request.body

  let user = users.find(user => user.username === username)

  if (user) {
    return response.status(400).json({ error: 'User already exists!' })
  }

  user = {
    name,
    username,
    id: uuidv4(),
    todos: []
  }

  users.push(user)

  return response.status(201).json(user)
})

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request

  return response.json(user.todos)
})

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request
  const { title, deadline } = request.body
  const todo = {
    id: uuidv4(), // precisa ser um uuid
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }
  user.todos.push(todo)

  return response.status(201).json(todo)
})

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request
  const { id } = request.params
  const { title, deadline } = request.body

  const todo = user.todos.find(todo => todo.id === id)
  if (!todo) {
    return response.status(404).json({ error: 'Todo not found!' })
  }
  title ? (todo.title = title) : null
  deadline ? (todo.deadline = new Date(deadline)) : null

  const newTodos = user.todos.filter(todo => todo.id != id)
  newTodos.push(todo)
  user.todos = newTodos

  return response.json(todo)
})

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { user } = request
  const { id } = request.params

  const todo = user.todos.find(todo => todo.id === id)

  if (!todo) {
    return response.status(404).json({ error: 'Todo not found!' })
  }

  todo.done = true

  const newTodos = user.todos.filter(todo => todo.id != id)
  newTodos.push(todo)
  user.todos = newTodos

  return response.status(201).json(todo)
})

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request
  const { id } = request.params

  const todo = user.todos.find(todo => todo.id === id)

  if (!todo) {
    return response.status(404).json({ error: 'Todo not found!' })
  }

  const todos = user.todos.filter(todo => todo.id != id)
  user.todos = todos

  return response.status(204).json(user.todos)
})

module.exports = app
