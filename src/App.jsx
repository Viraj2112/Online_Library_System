import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <div className='container mx-auto'>
          <Header/>
            <Outlet/>
          <Footer/>
        </div>
      </Provider>
    </>
  )
}

export default App
