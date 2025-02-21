
import java from '../../assets/java.svg'
import react from '../../assets/react.svg'
import node from '../../assets/nodejs.svg'
import postgresql from '../../assets/postgresql.svg'
import spring from '../../assets/springboot-custom.svg'


function StackIcons() {

    const icons = [{
        name: 'ReactJs',
        image: react
    },
    {
        name: 'NodeJs',
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
  <div className='grid items-center justify-center gap-8 p-8 mx-auto mt-4 md:p-0 md:flex h-fit md:w-2/3 md:space-x-4'>
    {icons.map((icon) => (
      <div className='flex flex-col justify-between h-full gap-8 space-y-8 md:gap-4 md:p-6'>
        <div className='relative space-y-2 group'>
          <img 
            src={icon.image}
            className='w-16 h-16 p-3 transition-all bg-white border-2 rounded-full border-black-custom shadow-custom hover:shadow-custom-hover '
          />
          <p className='absolute text-lg font-semibold transition-all duration-300 ease-in-out transform -translate-x-1/2 translate-y-2 opacity-0 left-1/2 text-black-custom group-hover:opacity-100 group-hover:-translate-y-1 whitespace-nowrap'>
            {icon.name}
          </p>
        </div>
      </div>
    ))}
  </div>
)
}

export default StackIcons