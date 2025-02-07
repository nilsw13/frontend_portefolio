import { Typewriter } from 'react-simple-typewriter'
import { Card } from '../ui/card'

function Hero() {

   


  return (
    <>

       
        <div className="flex flex-col gap-4 mb-8 text-center">
           
            <h1 className="text-4xl md:text-7xl font-bold  text-[#1a1a1a] mt-[20vh]">
              Nils Wenting
            </h1>
            <div className='items-center align-middle text-xl md:text-4xl font-semibold text-[#1a1a1a] mb-32'>
            <Typewriter
              words={['Web Developper']}
              loop={1}
              cursor
                cursorStyle='_'
                typeSpeed={60}
              />
            </div>                


            <Card className="bg-white border-[#1a1a1a] border-2 shadow-[4px_4px_0px_black] w-[90%]  rounded-none md:p-6 p-8 transition-all hover:shadow-[8px_8px_0px_black] hover:-translate-y-1 md:w-2/3 mx-auto">
            <p className="font-medium text-center text-md">
            Hello, I’m Nils Wenting, a web developer based in Marseille. I specialize in creating functional and visually engaging web applications. I am actively seeking an apprenticeship to enhance my expertise and contribute to innovative projects.
            </p>
          </Card>
       
               
        
        </div>


    
    </>
  )
}

export default Hero