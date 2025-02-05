import { AlignHorizontalDistributeCenter, Contact2, Dot, HomeIcon, MenuIcon, ProjectorIcon, XIcon } from 'lucide-react'
import{ useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import me from '../../assets/image2vector.svg'
import { Button } from '../ui/button';




function NavBar() {

    


    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);    

    const links: Array<{ name: string; path: string; icon: JSX.Element , sectionId: string}> = [
        {
            name: 'Home',
            path: '/',
            icon: <HomeIcon />,
            sectionId: 'home'
        },
        {
            name: 'Stack',
            path: '/',
            icon: <AlignHorizontalDistributeCenter />,
            sectionId: 'stack'
        },
        {
            name: 'Projects',
            path: '/projects',
            icon: <ProjectorIcon />,
            sectionId: 'projects'
        },
        {
            name: 'Contact',
            path: '/contact',
            icon: <Contact2 />,
            sectionId: 'contact'
        }
            

    ];


    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768)
        }
    
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }, [])

      const navigateToSection = (sectionId : string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    



  return (
    <>
    
    <div className=' border-b-2 border-black-custom p-6 flex justify-between items-center bg-[#f0ead6] sticky top-0 z-10   mt-4 '>
    <div className="flex items-center space-x-6">
          <motion.img
                       whileHover={{ scale: 1.1 }}
                       src={me} 
                       className="inline-block w-16 h-16 pr-4" 
                       alt="Old school computer" />
                      
          <span className="text-lg font-semibold">Nils Wenting</span>

          {!isMobile && (
                <span className='bg-green-300 px-2 py-2 rounded-none border border-black-custom  font-bold text-xs items-center text-center mt-1 hover:-translate-y-0.5   shadow-custom hover:shadow-custom-hover transition-all'>
                  <div>
                <Link to='/contact' className='text-black'>
                
                <Dot className='inline-block w-4 h-4 text-green-700 -mt-0.5  '/>
                <Link to={'/contact/mail'} className='inline-block pr-2'>Seek apprenticeship</Link>
                
                </Link>
                </div>
                 
                 
                 </span>
            ) 


          }
         
        </div>


            {/*hamburger menu*/}

             {/* Bouton Menu Hamburger pour Mobile */}
            {isMobile && (
                <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="z-50 text-blue-custom"
                >
                {isMenuOpen ? <XIcon size={24} className='text-black ' /> : <MenuIcon size={24} className='' />}
                </motion.button>
            )}


        {/*navigation with link items*/}
        
             {/* Menu Navigation Desktop */}
      {!isMobile && (
        <nav className="flex flex-row items-center justify-center gap-8 pr-10 text-center">
          {links.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              
              className="font-bold transition-all text-md text-carambar-500 hover:text-carambar-700 bubble hover:scale-110"
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}

        

         {/* Menu Mobile */}
      <AnimatePresence>
        
        {isMobile && isMenuOpen && (
            
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 z-40 flex flex-col items-center justify-center w-2/3 h-screen gap-8 border-l-2 shadow-xl bg-blue-custom/90 border-black-custom"

          > 

            <div className='relative bottom-[28vh] font-bold text-black'> <h3>NILS WENTING</h3></div>
                

            {links.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  
                  className="pt-1 pb-1 pl-2 pr-2 text-lg text-black transition-all bg-yellow-200 rounded-none font-md shadow-small-custom focus:shadow-custom-hover"
                  onClick={() => navigateToSection(item.sectionId)}
                >
                  {item.name}
                  </Button>
              </motion.div>
            ))}

            <div className='absolute bottom-20'>
                <span className='items-center px-2 py-1 mt-1 text-xs font-bold text-center transition-all bg-green-300 rounded-lg shadow-md hover:scale-105'>
            
                <Link to='/contact' className='text-black'>
                 ¤ Seek apprenticeship
                </Link>
                 
                 </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



    </div>

    </>
  )
}

export default NavBar