import Router from './routes.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'
import Header from './components/Header/index.jsx'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  )
}

export default App
