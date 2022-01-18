/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade – Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

//  1
const countAuthors = findAuthor =>
  allBooks.filter(({ author }) => findAuthor === author)

const authors = []
const allBooks = []

console.log(`Total de categorias: ${booksByCategory.length}`)
for (const { category, books } of booksByCategory) {
  console.log(`A categoria ${category} possui ${books.length} livros`)

  for (const { author, title } of books) {
    if (allBooks.indexOf(books) === -1) allBooks.push({ author, title })
    if (authors.indexOf(author) === -1) authors.push(author)
  }
}
console.log(`Autores: ${authors.toString()}`)

console.log(countAuthors('Augusto Cury'))
//  2
