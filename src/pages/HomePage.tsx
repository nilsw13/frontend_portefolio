import ContactForm from '@/components/Contact/ContactForm'
import Hero from '@/components/Hero/Hero'
import ProjectsGrid from '@/components/ProjectSection/ProjectGrid'
import StackSection from '@/components/StackSection/StackSection'
import { SectionSeparator } from '@/components/utils/SectionSeparator'

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
            <ContactForm />
           </section>

            
          
          
        

    
        


            </div>
    
    </>
  )
}

export default HomePage