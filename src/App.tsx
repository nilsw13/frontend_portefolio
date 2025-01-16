import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navigation/NavBar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer/Footer'
import ContactForm from './components/Contact/contact-overview/ContactForm'
import PhoneContact from './components/Contact/contact-overview/PhoneContact'
import ContactGithub from './components/Contact/contact-overview/ContactGithub'
import LinkedinContact from './components/Contact/contact-overview/LinkedinContact'

function App() {



  return (
    <>    
      <div className='  text-[#1a1a1a] font-sans'>

        <NavBar />


          <Routes>
          

            <Route path="/"  element={<HomePage />}>
                <Route path='/contact/mail' element={<ContactForm />} />
                <Route path='/contact/phone' element={<PhoneContact />} />
                <Route path='/contact/github' element={<ContactGithub />} />
                <Route path='/contact/linkedin' element={<LinkedinContact />} />

            </Route>


          </Routes>

        <Footer />

        </div>

    </>
  )
}

export default App
