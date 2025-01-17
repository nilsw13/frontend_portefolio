import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navigation/NavBar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer/Footer'
import ContactForm from './components/Contact/contact-overview/ContactForm'

import ContactTab from './components/Contact/contact-overview/ContactTab'

function App() {



  return (
    <>    
      <div className='  text-[#1a1a1a] font-sans'>

        <NavBar />


          <Routes>
          

            <Route path="/"  element={<HomePage />}>
                <Route path='/contact/mail' element={<ContactForm />} />
                
                <Route 
                path='/contact/phone' 
                element={<ContactTab
                  title='Phone Contact'
                  subtitle='06 77 30 93 46'
                  description='I am available from Monday to Friday'
                  horaires='From 9:00 to 18:00'
                  buttonColor='bg-green-300' 
                  buttonText='Text me on whatsapp' />
                }
                
                  />


                <Route 
                path='/contact/github' 
                element={<ContactTab 
                  title='Github Contact'
                  description='Check out my projects and contributions:'
                  buttonColor='bg-blue-custom' 
                  buttonText='Visit my Github'
                  postBUttonText='Feel free to explore my repositories and open source contributions' 
                />} />



                <Route 
                path='/contact/linkedin' 
                element={<ContactTab 
                  title='Linkedin Contact'
                  description='Check out my professional profile and network:'
                  buttonColor='bg-blue-600' 
                  buttonText='Visit my Linkedin'
                  postBUttonText='Feel free to add me to your network'
                />} />

            </Route>


          </Routes>

        <Footer />

        </div>

    </>
  )
}

export default App
