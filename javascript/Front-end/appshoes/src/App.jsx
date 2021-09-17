import Router from './routes.jsx'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* {<Header/>} */}
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
