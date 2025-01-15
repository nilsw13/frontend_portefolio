import React from 'react'
import { Card } from '../ui/card'
import java from '../../assets/java.svg'
import react from '../../assets/react.svg'
import node from '../../assets/nodejs.svg'
import postgresql from '../../assets/postgresql.svg'
import spring from '../../assets/springboot-custom.svg'


function StackIcons() {

    const icons = [{
        name: 'React',
        image: react
    },
    {
        name: 'Node',
        image: node
    },

    {
        name: 'Java',
        image: java
    },

    {
        name: 'Spring Boot',
        image: spring
    },


    {
        name: 'PostgreSQL',
        image: postgresql
    },

    
    ]



  return (
      <div className='grid p-4 md:p-0 md:flex justify-center items-center md:w-2/3 mt-4  gap-8 md:space-x-4'>
            {icons.map((icon, index) => (
                
                    <div className='flex flex-row justify-between space-y-2 gap-4'>
                        <img src={icon.image}
                            className='w-16 h-16 rounded-full  border-2 border-black-custom p-3 shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all'
                        />
                    </div>
                
            ))}

    </div>
  )
}

export default StackIcons