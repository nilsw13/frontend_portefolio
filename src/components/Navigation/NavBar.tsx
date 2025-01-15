import { AlignHorizontalDistributeCenter, HomeIcon, MenuIcon, ProjectorIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import me from '../../assets/image2vector.svg'




function NavBar() {

    


    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);    

    const links: Array<{ name: string; path: string; icon: JSX.Element }> = [
        {
            name: 'Home',
            path: '/',
            icon: <HomeIcon />
        },
        {
            name: 'About',
            path: '/about',
            icon: <AlignHorizontalDistributeCenter />
        },
        {
            name: 'Projects',
            path: '/projects',
            icon: <ProjectorIcon />
        }
    ];


    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768)
        }
    
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }, [])
    



  return (
    <>
    
    <div className=' border-b-2 border-black-custom p-6 flex justify-between items-center bg-[#f0ead6] sticky top-0 z-10   mt-4 '>
    <div className="flex items-center space-x-6">
          <motion.img
                       whileHover={{ scale: 1.1 }}
                       src={me} 
                       className="w-16 h-16 inline-block pr-4" 
                       alt="Portrait de Nils" />
                      
          <span className="font-semibold text-lg">Nils Wenting</span>

          {!isMobile && (
                <span className='bg-green-300 px-2 py-1 rounded-lg font-bold text-xs items-center text-center mt-1  shadow-md hover:scale-105 transition-all'>
            
                <Link to='/contact' className='text-black'>
                 ¤ Seek apprenticeship
                </Link>
                 
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
            className="fixed top-0 right-0 z-40 flex flex-col items-center justify-center w-2/3 h-screen gap-8 bg-blue-custom shadow-xl"

          > 

            <div className='relative bottom-[28vh] font-bold text-beige-custom'> <h3>NILS WENTING</h3></div>
                

            {links.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-xl font-bold text-carambar-500 hover:text-carambar-700 focus:sclae-105 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <div className='absolute bottom-20'>
                <span className='bg-green-300 px-2 py-1 rounded-lg font-bold text-xs items-center text-center mt-1 shadow-md hover:scale-105 transition-all'>
            
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