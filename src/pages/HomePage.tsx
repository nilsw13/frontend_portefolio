import ContactIcons from '@/components/Contact/ContactIcons'
import Hero from '@/components/Hero/Hero'
import ProjectsGrid from '@/components/ProjectSection/ProjectGrid'
import StackSection from '@/components/StackSection/StackSection'
import { SectionSeparator } from '@/components/utils/SectionSeparator'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import ContactHeader from '@/components/Contact/ContactHeader'


function HomePage() {




  return (
    <>

        <div className='flex flex-col min-h-screen'>
        
        

        
        
      

            <section id='home' className='h-fit mb-[10vh]'>
             <Hero /> 
            
            </section>

            <SectionSeparator title='Tech Stack' />

           <section id='stack' className='mb-[10vh] mt-[10vh]'>
             <StackSection />
           </section>
        

           <SectionSeparator title='Projects' />
           <section id='projects' className='mb-[10vh] mt-[10vh]'>
                <ProjectsGrid />
           </section>


           <SectionSeparator title='Contact Me' />
           <section id='contact' className='mb-[10vh] mt-[10vh]'>


            <motion.div 
              initial={{ opacity: 0,  }}
               whileInView={{ opacity: 1 }}
               transition={{ duration:1.2 }}
              exit={{ opacity: 0 }}
              className='flex flex-col min-h-full '>
                  <ContactHeader />
                  <Outlet  />
            
            </motion.div>
            <div className='flex items-center justify-center w-screen mt-8'>
            <ContactIcons />

            </div>
           </section>

            
          
          
        

    
        


            </div>
    
    </>
  )
}

export default HomePage