import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {

  return (
    <div className='App'>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
