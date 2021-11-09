import './App.css'
import { Repository } from './components/Repository'
const repository = {
  name: 'Repository name',
  description: 'Repository description',
  link: 'Repository link'
}

function App () {
  return (
    <div className='App'>
      <ul>
        <Repository repository={repository} />
        <Repository />
        <Repository />
        <Repository />
      </ul>
    </div>
  )
}

export default App
