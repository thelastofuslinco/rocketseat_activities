const { response, request } = require('express')
const express = require('express')

const app = express()
app.use(express.json())

// Get - Busca umna informação dentro do servidor
// Post - Inserir uma informação dentro do servidor
// Put - Alterar uma informação dentro do servidor
// Delete - Deleta uma informação dentro do servidor
// Patch - Altera uma informação especifica

// Tipos de parâmetros
// Route Params => Indentificar um recurso editar / deletar / buscar
// Query Params => Paginação / Filtro

app.get('/coursers', (request, response) => {
  const query = request.query
  console.log(query)
  return response.json(['Lincoln, Felipe, Dart'])
})

app.post('/coursers', (request, response) => {
  const body = request.body
  console.log(body)
  return response.json(['Lincoln, Felipe, Dart, JavaScript'])
})

app.put('/coursers/:id', (request, response) => {
  const params = request.params
  console.log(params)
  return response.json(['Abe, Felipe, Dart, JavaScript'])
})

app.patch('/coursers/:id', (request, response) => {
  return response.json(['Abe, Folopedes, Dart, JavaScript'])
})

app.delete('/coursers/:id', (request, response) => {
  return response.json(['Abe, Felipe,  JavaScript'])
})

app.listen(3333)
