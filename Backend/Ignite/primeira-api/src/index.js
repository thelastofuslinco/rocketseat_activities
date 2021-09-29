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

function getBalance (statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'credit') {
      return acc + operation.amount
    } else {
      return acc - operation.amount
    }
  }, 0)
  return balance
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

  return response.status(201).send()
})

app.put('/account', cpfExists, (request, response) => {
  const { name } = request.body
  const { customer } = request

  customer.name = name
  return response.status(201).send()
})

app.get('/account', cpfExists, (request, response) => {
  const { customer } = request

  return response.json(customer)
})

app.delete('/account', cpfExists, (request, response) => {
  const { customer } = request

  customers.splice(customer, 1)

  return response.json(customers)
})

app.get('/statement', cpfExists, (request, response) => {
  const { customer } = request
  return response.json(customer.statement)
})

app.post('/deposit', cpfExists, (request, response) => {
  const { description, amount } = request.body
  const { customer } = request

  customer.statement.push({
    description,
    amount,
    created_at: new Date(),
    type: 'credit'
  })

  return response.status(201).send()
})

app.post('/withdraw', cpfExists, (request, response) => {
  const { amount } = request.body
  const { customer } = request
  const balance = getBalance(customer.statement)

  if (balance < amount) {
    return response.status(400).json({ error: 'Founds not enough' })
  }

  customer.statement.push({
    amount,
    created_at: new Date(),
    type: 'debit'
  })

  return response.status(201).send()
})

app.get('/statement/date', cpfExists, (request, response) => {
  const { customer } = request
  const { date } = request.query
  const dateFormated = new Date(date + ' 00:00')

  const statement = customer.statement.filter(
    statement =>
      statement.created_at.toDateString() === dateFormated.toDateString()
  )

  return response.json(statement)
})

app.listen(3333)
