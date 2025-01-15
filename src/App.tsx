import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navigation/NavBar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer/Footer'

function App() {



  return (
    <>    
      <div className='  text-[#1a1a1a] font-sans relative overflow-hidden'>

        <NavBar />


          <Routes>
          

            <Route path="/" element={<HomePage />} />


          </Routes>

        <Footer />

        </div>

    </>
  )
}

export default App
