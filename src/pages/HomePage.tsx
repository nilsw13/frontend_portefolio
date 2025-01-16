import ContactForm from '@/components/Contact/contact-overview/ContactForm'
import ContactIcons from '@/components/Contact/ContactIcons'
import Hero from '@/components/Hero/Hero'
import ProjectsGrid from '@/components/ProjectSection/ProjectGrid'
import StackSection from '@/components/StackSection/StackSection'
import { SectionSeparator } from '@/components/utils/SectionSeparator'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

function HomePage() {
  return (
    <>

        <div className='flex flex-col min-h-screen'>
        


        {/* hero section */}

            <section className='h-fit mb-[10vh]'>
             <Hero /> 
            
            </section>

            <SectionSeparator title='Tech Stack' />

           <section className='mb-[10vh] mt-[10vh]'>
             <StackSection />
           </section>
        

           <SectionSeparator title='Projects' />
           <section className='mb-[10vh] mt-[10vh]'>
                <ProjectsGrid />
           </section>


           <SectionSeparator title='Contact Me' />
           <section className='mb-[10vh] mt-[10vh]'>


            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1,
              transition: {
                duration: 0.5
               }}}
              exit={{ opacity: 0 }}
              className='min-h-full '>
            <Outlet  />
            </motion.div>
            <div className='w-screen  flex justify-center items-center mt-8'>
            <ContactIcons />

            </div>
           </section>

            
          
          
        

    
        


            </div>
    
    </>
  )
}

export default HomePage