const { request, response } = require('express')
const { v4: uuidv4 } = require('uuid')
const express = require('express')

const app = express()
app.use(express.json())

const customers = []

// middlewares
function cpfExists (request, response, next) {
  const { cpf } = request.headers

  const customer = customers.find(customer => customer.cpf === cpf)

  if (!customer) {
    return response.status(400).json({ error: 'Customer not found' })
  }

  request.customer = customer

  return next()
}

// Requests
app.post('/account', (request, response) => {
  const { cpf, name } = request.body

  const customersExists = customers.some(customer => customer.cpf === cpf)

  if (customersExists) {
    return response.status(400).json({ error: 'This cpf is already used' })
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  })

  console.log(customers)
  return response.status(201).send()
})

app.get('/statement', cpfExists, (request, response) => {
  const { customer } = request
  return response.json(customer.statement)
})

app.listen(3333)
