import Router from './routes.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'
import { Provider } from 'react-redux'
import Header from './components/Header/index.jsx'
import './config/ReactotronConfig'
import store from './store/index.js'
import { ToastContainer } from 'react-toastify'

function App () {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Router />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
