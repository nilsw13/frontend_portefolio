import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Card } from '../ui/card'

function Hero() {

   


  return (
    <>

       
        <div className="text-center mb-8 flex  flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-bold  text-[#1a1a1a] mt-[20vh]">
              Nils Wenting
            </h1>
            <div className='items-center align-middle text-xl dm:text-3xl font-semibold text-[#1a1a1a]'>
            <Typewriter
              words={['Web Developper']}
              loop={1}
              cursor
                cursorStyle='_'
                typeSpeed={60}
              />
            </div>                


            <Card className="bg-[#f0ead6] border-[#1a1a1a] border-2 shadow-[4px_4px_0px_black] rounded-none p-6 transition-all hover:shadow-[8px_8px_0px_black] hover:-translate-y-1 w-2/3 mx-auto">
            <p className=" text-center font-medium text-md">
              Hello, Im Nils Wenting, a web developer based in Marseille. I specialize in building web apps. I am passionate about creating beautiful and functional websites.
            </p>
          </Card>
       
               
        
        </div>


    
    </>
  )
}

export default Hero